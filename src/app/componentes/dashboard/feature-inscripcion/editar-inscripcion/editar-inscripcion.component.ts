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
  selector: 'app-editar-estudiante',
  templateUrl: './editar-inscripcion.component.html',
  styleUrls: ['./editar-inscripcion.component.scss']
})


export class EditarInscripcionComponent implements OnInit {
 
  
  cursos:any[]= ['react', 'angular', 'vue', 'react y angular', 'react y vue', 'angular y vue'];
  dias: any[] = ['lunes y miercoles', 'martes y jueves', 'sabado', 'miercoles y viernes'];
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

  editEstudiante(form:any){
    const formInscripciones: Inscripcion={
      id: this.data.id,
      nombre: this.form.value.estudiante,
      apellido: this.data.apellido,
      curso: this.form.value.curso,
      dias: this.form.value.dias,
     
    }

    this._inscripcionesService.editarInscripciones(formInscripciones);
      this.router.navigate(['/dashboard/inscripciones']);
      this._snackBar.open('Estudiante editado exitosamente','', {
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

inicializar(estudiante:Inscripcion) {

  this.form = this.fb.group({
    estudiante:  ["",  [Validators.required, Validators.maxLength(40), ]],
    curso:  ["",  [Validators.required]],
    dias: ["",  [Validators.required]],
    
    })
  console.log(this.form);
  this.form.get('estudiante')?.patchValue(estudiante.nombre);
  this.form.get('curso')?.patchValue(estudiante.curso);
  this.form.get('dias')?.patchValue(estudiante.dias);
  
}
}
