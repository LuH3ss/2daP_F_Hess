import { DetalleComponent } from './detalles/detalle.component';

import { ListaAlumnosComponent } from './alumnos/listaAlumnos.component';
import { AgregarAlumnosListaComponent } from './agregar-alumnos-lista/agregar-alumnos-lista.component';
import { EditarAlumnosListaComponent } from './editar-alumnos-lista/editar-alumnos-lista.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MaterialModule,   
    RouterModule,
   
   ]
})
export class FeatureAlumnosModule { }
