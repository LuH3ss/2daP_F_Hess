import { EditarCursoComponent } from './feature-cursos/editar-curso/editar-curso.component';
import { AgregarAlumnosListaComponent } from './feature-alumnos/agregar-alumnos-lista/agregar-alumnos-lista.component';
import { AgregarInscripcionComponent } from './feature-inscripcion/agregar-inscripcion/agregar-inscripcion.component';
import { InscripcionComponent } from './feature-inscripcion/inscripcion/inscripcion.component';
import { IngresoComponent } from '../../coreModule/ingreso/ingreso.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './feature-cursos/cursos/cursos.component';
import { ListaAlumnosComponent } from './feature-alumnos/alumnos/listaAlumnos.component';
import { GuardiaPrimeroGuard } from 'src/app/sharedModule/guardia-primero.guard';
import { AgregarCursoComponent } from './feature-cursos/agregar-curso/agregar-curso.component';
import { InicioComponent } from 'src/app/coreModule/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',component: DashboardComponent, canActivate: [GuardiaPrimeroGuard] , children: [
      {path: '', component: InicioComponent},
      {path: 'alumnos', component: ListaAlumnosComponent},
      {path: 'inscripcion', component: InscripcionComponent},
      {path: 'agregar-inscripcion', component: AgregarInscripcionComponent},    
      {path: 'agregar-alumno', component: AgregarAlumnosListaComponent},    
      {path: 'cursos', component: CursosComponent},
      {path: 'agregar-cursos', component: AgregarCursoComponent},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
   
  ],
  exports: [
    RouterModule,
   
  ]
})
export class DashboardRoutingModule { }
