import { IngresoComponent } from './coreModule/ingreso/ingreso.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'ingreso', pathMatch: 'full'}, 
  {path: 'ingreso', component: IngresoComponent},
  { path: 'dashboard', loadChildren: ()=> import('./componentes/dashboard/dashboard.module').then(m => m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
