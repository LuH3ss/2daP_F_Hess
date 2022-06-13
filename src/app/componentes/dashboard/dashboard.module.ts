import { EditarCursoComponent } from './feature-cursos/editar-curso/editar-curso.component';
import { CursosComponent } from './feature-cursos/cursos/cursos.component';
import { InscripcionComponent } from './feature-inscripcion/inscripcion/inscripcion.component';
import { DetalleInscripcionComponent } from './feature-inscripcion/detalle-inscripcion/detalle-inscripcion.component';
import { EditarInscripcionComponent } from './feature-inscripcion/editar-inscripcion/editar-inscripcion.component';
import { DetalleComponent } from './feature-alumnos/detalles/detalle.component';
import { AgregarCursoComponent } from './feature-cursos/agregar-curso/agregar-curso.component';
import { ListaAlumnosComponent } from './feature-alumnos/alumnos/listaAlumnos.component';
import { AgregarAlumnosListaComponent } from './feature-alumnos/agregar-alumnos-lista/agregar-alumnos-lista.component';
import { FeatureCursosModule } from './feature-cursos/feature-cursos.module';
import { FeatureAlumnosModule } from './feature-alumnos/feature-alumnos.module';
import { EditarAlumnosListaComponent } from './feature-alumnos/editar-alumnos-lista/editar-alumnos-lista.component';
import { HeaderComponent } from '../../coreModule/header/header.component';

import { MaterialModule } from '../material/material.module';
import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { FeatureInscripcionModule } from './feature-inscripcion/feature-inscripcion.module';
import { AgregarInscripcionComponent } from './feature-inscripcion/agregar-inscripcion/agregar-inscripcion.component';
import { DetalleCursosComponent } from './feature-cursos/detalle-cursos/detalle-cursos.component';

@NgModule({
  declarations: [
    DashboardComponent,
    
    HeaderComponent,
    AgregarAlumnosListaComponent,
    ListaAlumnosComponent,
    AgregarInscripcionComponent,
    AgregarCursoComponent,
    EditarAlumnosListaComponent,
  
    DetalleComponent,
  
    EditarInscripcionComponent,
    DetalleInscripcionComponent,
    InscripcionComponent,
    CursosComponent,   
    EditarCursoComponent,
    DetalleCursosComponent, 
    
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsModule,
    MatDialogModule,
    FeatureInscripcionModule,
    FeatureCursosModule,
    FeatureAlumnosModule,
    ], exports: [
    MaterialModule,
    FeatureInscripcionModule,
    FeatureCursosModule,
    FeatureAlumnosModule, 
      
   
  ]


})
export class DashboardModule { }
