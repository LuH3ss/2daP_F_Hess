import { Cursos } from '../../../../sharedModule/interfaces/cursos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  ListaCursos: Cursos[] = [
    {id: 1, cursoNombre: "UX/UI", cursoDias:"Lunes y Miércoles", precio: 2300, profesor: "Antonio Gallego", detalle:"Curso de UX/UI"},
    {id: 1, cursoNombre: "Angular", cursoDias:"Martes y Jueves", precio: 2500, profesor: "Marcelo Tinelli", detalle:"Curso de Angular"},
    {id: 1, cursoNombre: "Vue.Js", cursoDias:"Sabados", precio: 1300, profesor: "Ricardo Fort", detalle:"Curso de Vue.Js"},
  ];
  constructor() { }

  getCursos(){
    return this.ListaCursos.slice();
  }

  eliminarCursos(index: number){
    this.ListaCursos.splice(index, 1);
  }

  editarCursos(curso: Cursos){
      const index = this.ListaCursos.findIndex(c => c.id === curso.id)
      this.ListaCursos[index] = curso;
  }

  agregarCursos(curso: Cursos){
    this.ListaCursos.unshift(curso);

  }  
  
}
