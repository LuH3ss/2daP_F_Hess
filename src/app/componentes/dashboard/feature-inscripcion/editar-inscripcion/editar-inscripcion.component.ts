import { Inscripcion } from '../../../../sharedModule/interfaces/inscripcion';
import { InscripcionService } from '../servicios/inscripcion.service';

import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumnos } from 'src/app/sharedModule/interfaces/alumnos';
import { AgregarInscripcionComponent } from '../agregar-inscripcion/agregar-inscripcion.component';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-inscripcion.component.html',
  styleUrls: ['./editar-inscripcion.component.scss']
})


export class EditarInscripcionComponent implements OnInit {
 
  
  cursos:any[]= ['UX/UI', 'Angular', 'VueJs', 'UX/UI y Angular', 'UX/UI y vue', 'Angular y VueJs'];
  dias: any[] = ['Lunes y Miércoles', 'Martes y Jueves', 'Sabado', 'Miércoles y Viernes'];
  form: FormGroup;
  value: any = null;
  
  constructor (public dialogRef: MatDialogRef<AgregarInscripcionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Inscripcion,  private fb : FormBuilder,
    private _inscripcionesService: InscripcionService,
    private router: Router,
    private _snackBar: MatSnackBar
  ){
      const navigation = this.router.getCurrentNavigation();
      this.value = navigation?.extras?.state;
     
   }

  ngOnInit(): void {
   this.inicializar(this.data);

  }
  

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarAlumno(form:any){
    const formInscripciones: Inscripcion={
      id: this.data.id,
      nombre: this.form.value.alumno,
      apellido: this.data.apellido,
      curso: this.form.value.curso,
      dias: this.form.value.dias,
     
    }

    this._inscripcionesService.editarInscripciones(formInscripciones);
      this.router.navigate(['/dashboard/inscripcion']);
      this._snackBar.open('Alumno editado exitosamente','', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 1500,
      })
      this.dialogRef.close();
      this.form.reset();
    }
volver(){      
  this.dialogRef.close();
}

inicializar(alumno:Inscripcion) {

  this.form = this.fb.group({
    alumno:  ["",  [Validators.required, Validators.maxLength(30), ]],
    curso:  ["",  [Validators.required]],
    dias: ["",  [Validators.required]],
    
    })
  console.log(this.form);
  this.form.get('alumno')?.patchValue(alumno.nombre);
  this.form.get('curso')?.patchValue(alumno.curso);
  this.form.get('dias')?.patchValue(alumno.dias);
  
}
}
