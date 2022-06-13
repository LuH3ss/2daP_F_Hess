
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListaAlumnos } from 'src/app/sharedModule/interfaces/alumnos';
import { AgregarAlumnosListaComponent } from '../agregar-alumnos-lista/agregar-alumnos-lista.component';
import { ListaAlumnosService } from '../servicios/listaAlumnos.service';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-alumnos-lista',
  templateUrl: './editar-alumnos-lista.component.html',
  styleUrls: ['./editar-alumnos-lista.component.scss']
})
export class EditarAlumnosListaComponent implements OnInit {
  notas: any[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  form: FormGroup;
  value: any = null;
  nota:number;
  constructor (
    public dialogRef: MatDialogRef<AgregarAlumnosListaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ListaAlumnos,
    private fb : FormBuilder,
    private _alumnosService: ListaAlumnosService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
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
    const formAlumno: ListaAlumnos={
      id: this.data.id,
      nombre: this.form.value.alumno,
      apellido: this.data.apellido,
      edad: this.form.value.edad,
      correo: this.form.value.correo,
      telefono: this.form.value.telefono,
    }
    this._alumnosService.editarAlumno(formAlumno);
      this.router.navigate(['/dashboard/alumnos']);
      this._snackBar.open('Alumno editado exitosamente','', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 1500,
      })
      this.dialogRef.close();
   
  }

  volver(){
      this.router.navigate(['/dashboard/alumnos']);
      this.dialogRef.close();
      console.log(this.form.value);

  }

  inicializar(alumno:ListaAlumnos) {
    this.form = this.fb.group({
      alumno:  ["",  [Validators.required, Validators.maxLength(10), Validators.pattern(/^([Aa-zA-ZáéíóúÁÉÍÓÚÑñ]{2,}\s?){2,4}$/)]],
      edad:  ["",  [Validators.required]],
      correo: ["",  [Validators.required]],
      telefono:  ["", [Validators.required]],
    })
    console.log(this.form);
    this.form.get('alumno')?.patchValue(alumno.nombre);
    this.form.get('edad')?.patchValue(alumno.edad);
    this.form.controls["correo"].setValue(alumno.correo);
    this.form.get('telefono')?.patchValue(alumno.telefono);
    
  }

}
