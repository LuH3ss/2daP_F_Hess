import { Inscripcion } from './../../../../sharedModule/interfaces/inscripcion';

import { Alumnos, ListaAlumnos } from 'src/app/sharedModule/interfaces/alumnos';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  inscripciones=  [
    {id:1,nombre: "Sofia",apellido:"Lingüini",curso:'UX/UI',dias:"Lunes y Miercoles"},
    {id:2,nombre: "Susana",apellido:"Oriah",curso:'Diseño para Devs',dias:" Martes y Jueves"},
    {id:3,nombre: "Neri", apellido:"Ballanti", curso:'VueJS',dias:"Lunes y Miercoles"},
    {id:4,nombre: "Julio", apellido:"Rodriguez",curso:'Angular',dias:"Martes y Jueves"},

  ];
  constructor() { }

  getInscripciones(){
    return this.inscripciones.slice();
  }

  eliminarInscripciones(index: number){
    this.inscripciones.splice(index, 1);
  }

  editarInscripciones(inscripcion: Inscripcion){
      const index = this.inscripciones.findIndex(c => c.id === inscripcion.id)
      this.inscripciones[index] = inscripcion;
  }

  agregarInscripciones(inscripcion: Inscripcion){
    this.inscripciones.unshift(inscripcion);

  }

 
}