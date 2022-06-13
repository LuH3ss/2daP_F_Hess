import { InscripcionService } from '../servicios/inscripcion.service';
import { DetalleInscripcionComponent } from '../detalle-inscripcion/detalle-inscripcion.component';
import { NavigationExtras, Router } from '@angular/router';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Inscripcion } from 'src/app/sharedModule/interfaces/inscripcion';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditarInscripcionComponent } from '../editar-inscripcion/editar-inscripcion.component';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})
export class InscripcionComponent implements OnInit {


  datosUsuario: string;

  listaInscripciones: Inscripcion[] = [];

  admin: boolean = false;
  

  displayedColumns: string[] = ['nombre', 'curso', 'dias', 'acciones'];

  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor( 
    
     private _inscripcionService:InscripcionService, 
     private _snackBar: MatSnackBar,
     private router: Router,
     public dialog: MatDialog
     )  { }

  ngOnInit(): void {
   
    this.loadView();
  }

  validaRol(){
    this.datosUsuario = JSON.stringify(localStorage.getItem('rol'));
    console.log(this.datosUsuario);

    if(localStorage.getItem('rol') === 'admin')
    {
      console.log("ES ADMIN")
      this.admin=true;

    }
    else{
    this.admin=false;
    console.log("ES USER")
    }
  }
  loadView(){
    this.cargarInscripciones();
    this.validaRol()
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }
  cargarInscripciones(){
    this.listaInscripciones = this._inscripcionService.getInscripciones();
    this.dataSource = new MatTableDataSource(this.listaInscripciones);
    this.ngAfterViewInit();
  }

  eliminarInscripciones(index: number){
    console.log(index);
    this._inscripcionService.eliminarInscripciones(index);
    this.cargarInscripciones();
    this._snackBar.open('Alumno eliminado con exito','', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1500,
    })
  } 

  abreDialogo2(id_delform:number): void{
    const alumno = this._inscripcionService.getInscripciones().find(c => c.id === id_delform);
    const dialogRef = this.dialog.open(DetalleInscripcionComponent, {
      data: alumno,
      width: '1250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.cargarInscripciones();
    });
  }

  editarInscripcion(id:number){
    this._snackBar.open('Registro de alumno editado','', {
     horizontalPosition: 'center',
     verticalPosition: 'top',
     duration: 1500,
 })
}


 ingresarAdmin(){
  console.log("ACTIVANDO EL ADMIN")
   this.admin = true;
 }
 ingresarUsuario(){
   this.admin = false;
 }


 abreDialogo(id_delform:number): void {
  const alumno = this._inscripcionService.getInscripciones().find(c => c.id === id_delform);
  const dialogRef = this.dialog.open(EditarInscripcionComponent, {
    data: alumno,
    width: '1250px',

  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
    this.cargarInscripciones();
  });
}

}
