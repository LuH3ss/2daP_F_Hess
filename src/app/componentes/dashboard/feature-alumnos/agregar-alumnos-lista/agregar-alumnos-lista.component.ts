import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {  ListaAlumnos } from 'src/app/sharedModule/interfaces/alumnos';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { ListaAlumnosService } from '../servicios/listaAlumnos.service';


@Component({
  selector: 'app-agregar-alumnos-lista',
  templateUrl: './agregar-alumnos-lista.component.html',
  styleUrls: ['./agregar-alumnos-lista.component.scss']
})
export class AgregarAlumnosListaComponent implements OnInit {
  

  form: FormGroup;
  value: any = null;
  constructor(
               private fb : FormBuilder,
               private _alumnosService: ListaAlumnosService,
               private router: Router,
               private _snackBar: MatSnackBar,

            ) {

                 const navigation = this.router.getCurrentNavigation();
                 this.value = navigation?.extras?.state;

    this.form = this.fb.group({
      id:[""],
      alumno:  ["",  [Validators.required, Validators.maxLength(10)]],
      edad:  ["",  [Validators.required]],
      correo: ["",  [Validators.required]],
       telefono:  ["", [Validators.required]],
    })
   }


  ngOnInit(): void {

  }

  guardar(){
    const alumno: ListaAlumnos={
      id: this.form.value.id,
      nombre: this.form.value.alumno,
      apellido: this.form.value.apellido,
      edad: this.form.value.edad,
      correo: this.form.value.correo,
      telefono: this.form.value.telefono,
    }
    console.log(alumno);
    this._alumnosService.agregarAlumno(alumno);
    this.router.navigate(['/dashboard/alumnos']);
    this._snackBar.open('Alumno agregado exitosamente','', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1500,
    })
    this.form.reset();
  }


  volver(){
    this.router.navigate(['/dashboard/alumnos']);
    console.log(this.form.value);
  }

}
