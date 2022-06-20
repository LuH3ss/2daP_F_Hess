
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
   this._alumnosService.getAlumnosList();

  }

  onNoClick(): void {
    this.dialogRef.close();
    
  }


  updateAlumnos(alumno: FormGroup){
    const formAlumno: ListaAlumnos = {
      id: this.data.id,
      nombre: alumno.value.nombre,
      apellido: alumno.value.apellido,

        edad:alumno.value.edad ,
      correo: alumno.value.correo,
      telefono: alumno.value.telefono,



  }

  this._alumnosService.updateAlumnos(formAlumno);
  this._alumnosService.getAlumnosList();
  this.form.reset();
  this.dialogRef.close();
  }


  volver(){
      this.router.navigate(['/dashboard/alumnos']);
      this.dialogRef.close();
      console.log(this.form.value);

  }

  inicializar(alumno: ListaAlumnos) {
    this.form = this.fb.group({
      npmbre:  ["",  [Validators.required, Validators.maxLength(10)]],
      apellido:["",  [Validators.required]],
      edad:  ["",  [Validators.required]],
      correo: ["",  [Validators.required]],
      telefono:  ["", [Validators.required]],
    })
    console.log(this.form);
    this.form.get('npmbre')?.patchValue(alumno.nombre);
    this.form.get('apellido')?.patchValue(alumno.apellido);
    this.form.get('edad')?.patchValue(alumno.edad);
    this.form.get("correo")?.patchValue(alumno.correo);
    this.form.get('telefono')?.patchValue(alumno.telefono);
    
  }

}
