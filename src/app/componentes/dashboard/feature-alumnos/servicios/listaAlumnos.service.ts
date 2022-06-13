import { Alumnos, ListaAlumnos } from 'src/app/sharedModule/interfaces/alumnos';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListaAlumnosService {

  ListaAlumnos=  [
    {id:1,nombre: "Abraham",apellido:"Maihuasowske", edad:37,telefono:1123568974, correo: 'holasoy@kosher.com'},
    {id:2,nombre: "Iasias",apellido:"O'Higgins",edad: 28, telefono: 785213648, correo: 'isa@color.br'},
    {id:3,nombre: "Paola", apellido:"Montenegro", edad: 37, telefono: 965231451 , correo: 'cosa1@cosa2.cpsa3'},
    {id:4,nombre: "Patricia", apellido:"Mitre", edad: 52, telefono: 6516541645 , correo: '12354@ejemplo.78'},

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