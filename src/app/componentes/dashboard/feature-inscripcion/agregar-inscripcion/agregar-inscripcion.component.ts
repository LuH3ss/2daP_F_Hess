import { InscripcionService } from '../servicios/inscripcion.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, NavigationExtras } from '@angular/router';
import {  Inscripcion } from 'src/app/sharedModule/interfaces/inscripcion';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-agregar-inscripcion',
  templateUrl: './agregar-inscripcion.component.html',
  styleUrls: ['./agregar-inscripcion.component.scss']
})


export class AgregarInscripcionComponent implements OnInit {

  cursos: any[] = ['react', 'angular', 'vue', 'react y angular', 'react y vue', 'angular y vue'];
  dias: any[] = ['lunes y miercoles', 'martes y jueves', 'sabado', 'miercoles y viernes'];
  form: FormGroup;
  value: any = null;
  constructor(
               private fb : FormBuilder,
               private _inscripcionService: InscripcionService,
               private router: Router,
               private _snackBar: MatSnackBar,

            ) { const navigation = this.router.getCurrentNavigation();
                 this.value = navigation?.extras?.state;

            this.form = this.fb.group({
              alumno:  ["",  [Validators.required, Validators.maxLength(40), Validators.pattern(/^([Aa-zA-ZáéíóúÁÉÍÓÚÑñ]{2,}\s?){2,4}$/)]],
              curso:  ["",  [Validators.required]],
              dias: ["",  [Validators.required]],

            });
}


  ngOnInit(): void {

  }

  guardar(){
    const alumno: Inscripcion={
      id: this.form.value.id,
      nombre: this.form.value.alumno,
      apellido: this.form.value.apellido,
      curso: this.form.value.curso,
      dias: this.form.value.dias,

    }

    this._inscripcionService.agregarInscripciones(alumno);
    this.router.navigate(['/dashboard/inscripcion']);
    this._snackBar.open('Inscripcion creada exitosamente','', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1500,
    })
    this.form.reset();
  }
  volver(){
    this.router.navigate(['/dashboard/inscripcion']);
    console.log(this.form.value);
  }
}

