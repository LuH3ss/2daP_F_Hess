import { Alumnos, ListaAlumnos } from 'src/app/sharedModule/interfaces/alumnos';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListaAlumnosService {

  ListaEstudiantes=  [
    {id:1,nombre: "Juan Carlos",apellido:"Martinez", edad:25,telefono:115512215, correo: 'algo@ejemplo'},
    {id:2,nombre: "Juan Carlos",apellido:"Martinez",edad: 30, telefono: 561654215, correo: 'algo@ejemplo'},
    {id:3,nombre: "Neri", apellido:"Ballanti", edad: 23, telefono: 156498714654 , correo: 'algo@ejemplo'},
    {id:4,nombre: "Julio", apellido:"Rodriguez", edad: 19, telefono: 6516541645 , correo: 'algo@ejemplo'},

  ];
  constructor() { }

  getEstudiantes(){
    return this.ListaEstudiantes.slice();
  }

  eliminarEstudiante(index: number){
    this.ListaEstudiantes.splice(index, 1);
  }

  editarEstudiante(estudiante: ListaAlumnos){
      const index = this.ListaEstudiantes.findIndex(c => c.id === estudiante.id)
      this.ListaEstudiantes[index] = estudiante;
  }

  agregarEstudiante(estudiante: ListaAlumnos){
    this.ListaEstudiantes.unshift(estudiante);

  }

  editEstudiante(estudiante: ListaAlumnos) {
    const index = this.ListaEstudiantes.findIndex(c => c.id === estudiante.id);
    this.ListaEstudiantes[index] = estudiante;


  }
}