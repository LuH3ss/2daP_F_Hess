import { Alumnos, ListaAlumnos } from 'src/app/sharedModule/interfaces/alumnos';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListaAlumnosService {

  ListaAlumnos=  [
    {id:1,nombre: "Juan Carlos",apellido:"Martinez", edad:25,telefono:115512215, correo: 'algo@ejemplo'},
    {id:2,nombre: "Juan Carlos",apellido:"Martinez",edad: 30, telefono: 561654215, correo: 'algo@ejemplo'},
    {id:3,nombre: "Neri", apellido:"Ballanti", edad: 23, telefono: 156498714654 , correo: 'algo@ejemplo'},
    {id:4,nombre: "Julio", apellido:"Rodriguez", edad: 19, telefono: 6516541645 , correo: 'algo@ejemplo'},

  ];
  constructor() { }

  getAlumnos(){
    return this.ListaAlumnos.slice();
  }

  
  editAlumno(alumno: ListaAlumnos){
    const index = this.ListaAlumnos.findIndex(c => c.id === alumno.id)
    this.ListaAlumnos[index] = alumno;
  }
  
  eliminarAlumno(index: number){
    this.ListaAlumnos.splice(index, 1);
  }
  
  editarAlumno(alumno: ListaAlumnos) {
    const index = this.ListaAlumnos.findIndex(c => c.id === alumno.id);
    this.ListaAlumnos[index] = alumno;
    
    
  }
  agregarAlumno(alumno: ListaAlumnos){
    this.ListaAlumnos.unshift(alumno);

  }
}