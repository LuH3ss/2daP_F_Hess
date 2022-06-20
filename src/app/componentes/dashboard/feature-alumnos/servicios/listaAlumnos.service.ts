import {  ListaAlumnos } from 'src/app/sharedModule/interfaces/alumnos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListaAlumnosService {

 apiURL = 'https://62a7cf34bedc4ca6d7cdbac8.mockapi.io/ListaAlumnos/';

  // ListaAlumnos=  [
  //   {id:1,nombre: "Abraham",apellido:"Maihuasowske", edad:37,telefono:1123568974, correo: 'holasoy@kosher.com'},
  //   {id:2,nombre: "Iasias",apellido:"O'Higgins",edad: 28, telefono: 785213648, correo: 'isa@color.br'},
  //   {id:3,nombre: "Paola", apellido:"Montenegro", edad: 37, telefono: 965231451 , correo: 'cosa1@cosa2.cpsa3'},
  //   {id:4,nombre: "Patricia", apellido:"Mitre", edad: 52, telefono: 6516541645 , correo: '12354@ejemplo.78'},

  // ];
  constructor(private http: HttpClient) { }



  updateAlumnos(alumno: ListaAlumnos): Observable<ListaAlumnos> {
    var response: any;
  response  = this.http.put<ListaAlumnos>(this.apiURL + alumno.id, alumno).subscribe(data => {
    console.log("data")
    console.log(data)
   return data;
   })
  return response;
   }






   
  getAlumnosList(): Observable<ListaAlumnos[]>
  {
    return this.http.get<ListaAlumnos[]>(this.apiURL);
  }

  deleteAlumno(id: number): Observable<ListaAlumnos> {
    return this.http.delete<ListaAlumnos>(this.apiURL + id);
}


  getSingleAlumno(id:number): Observable<ListaAlumnos> {
    return this.http.get<ListaAlumnos>(this.apiURL + id)

  }




  agregarAlumno(alumno: ListaAlumnos): Observable<ListaAlumnos>  {
    return this.http.post<ListaAlumnos>(this.apiURL, alumno);
}
  // }
  // agregarAlumno(alumno: ListaAlumnos){
  //   this.ListaAlumnos.unshift(alumno);

  // }
}