import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ListaAlumnos } from 'src/app/sharedModule/interfaces/alumnos';

import { AgregarAlumnosListaComponent } from '../agregar-alumnos-lista/agregar-alumnos-lista.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-delle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  detalle: ListaAlumnos;
  value: any = null;
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AgregarAlumnosListaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ListaAlumnos,
    private router: Router,
    private fb : FormBuilder,    
  ) {  
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
    }

  ngOnInit(): void {
    this.inicializar(this.data);
  }

  inicializar(alumno:ListaAlumnos) {
    this.form = this.fb.group({
      alumno:  alumno.nombre + " " + alumno.apellido,
      edad:  alumno.edad,
      correo: alumno.correo,
      telefono:  alumno.telefono,
    })
  }

  cerrar(){        
    this.dialogRef.close();
}

  onNoClick(): void {
    this.dialogRef.close();
    
  }

}
