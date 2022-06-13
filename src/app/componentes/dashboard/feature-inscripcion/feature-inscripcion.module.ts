import { EditarInscripcionComponent } from './editar-inscripcion/editar-inscripcion.component';
import { AgregarInscripcionComponent } from './agregar-inscripcion/agregar-inscripcion.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { DetalleInscripcionComponent } from './detalle-inscripcion/detalle-inscripcion.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
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
    RouterModule
  ]
})
export class FeatureInscripcionModule { }
