import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumnos, ListaAlumnos } from 'src/app/sharedModule/interfaces/alumnos';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inscripcion } from 'src/app/sharedModule/interfaces/inscripcion';
import { AgregarAlumnosListaComponent } from '../../feature-alumnos/agregar-alumnos-lista/agregar-alumnos-lista.component';


@Component({
  selector: 'app-detalle-inscripciones',
  templateUrl: './detalle-inscripcion.component.html',
  styleUrls: ['./detalle-inscripcion.component.scss']
})
export class DetalleInscripcionComponent implements OnInit {
  detalle: ListaAlumnos;
  value: any = null;
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AgregarAlumnosListaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Inscripcion,
    private router: Router,
    private fb : FormBuilder,    
  ) {  
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
    }

  ngOnInit(): void {
    this.inicializar(this.data);
  }

  inicializar(alumno:Inscripcion) {

    this.form = this.fb.group({
      alumno:  alumno.nombre,
     curso:  alumno.curso,
      dias: alumno.dias,
     
    })
  }
  

  cerrar(){
    
    this.dialogRef.close();
    

}

  onNoClick(): void {
    this.dialogRef.close();
    
  }


}
