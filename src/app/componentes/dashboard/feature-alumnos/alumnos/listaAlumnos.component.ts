import { MaterialModule } from 'src/app/componentes/material/material.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Cursos } from 'src/app/sharedModule/interfaces/cursos';
import { ListaAlumnos } from 'src/app/sharedModule/interfaces/alumnos';
import { Router } from '@angular/router';
import { ListaAlumnosService } from '../servicios/listaAlumnos.service';
import { EditarAlumnosListaComponent } from '../editar-alumnos-lista/editar-alumnos-lista.component';
import { DetalleComponent } from '../detalles/detalle.component';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-reportes',
  templateUrl: './listaAlumnos.component.html',
  styleUrls: ['./listaAlumnos.component.scss']
})
export class ListaAlumnosComponent implements OnInit {
  admin:boolean = false;
  datosUsuario: string;
 
  listaCursos: Cursos[] = [];
  listaAlumnos: ListaAlumnos[];
  constructor  (    
    private _alumnosListaService:ListaAlumnosService,
    private _snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.cargarVista();

    this.getAlumnos();
  }

  getAlumnos() {
    this._alumnosListaService.getAlumnosList().subscribe(
      (data)=> {
        this.listaAlumnos= data;
      })
  }

  isRole(){
    this.datosUsuario = JSON.stringify(localStorage.getItem('rol'));
    console.log(this.datosUsuario);

    if(localStorage.getItem('rol') === 'admin')
    {
   
      this.admin=true;

    }
    else{
    this.admin=false;
    
    }
  }
  cargarVista(){
    //this.cargarAlumnos();
    this.isRole();
  }

  deleteAlumno(id: number): void {
    this._alumnosListaService.deleteAlumno(id).subscribe(
      (data)=>{
        this.getAlumnos();
        this._snackBar.open('Alumno eliminado', '', {
          duration: 2000,
        });
      }
    )
  }

  getEstudianteDetalle(id:number){
    this._alumnosListaService.getSingleAlumno(id).subscribe(
      (data)=>{
        console.log(data)
      }
    )
  }



  openDialog(estudiante: ListaAlumnos): void {
    
    const dialogRef = this.dialog.open(EditarAlumnosListaComponent, {
      width: '850px',
      data: { 
        id: estudiante.id,
        nombre: estudiante.nombre,
        apellido: estudiante.apellido,
        edad: estudiante.edad,
        correo:estudiante.correo,
        telefono: estudiante.telefono,  
      }

      
  });
  dialogRef.afterClosed().subscribe((result: any) => {
    this.router.navigate(['alumnos']);
  });
  

  }
}

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort
  // }
  // cargarAlumnos(){
  //   this.listaAlumnos = this._alumnosListaService.getAlumnos();
  //   this.dataSource = new MatTableDataSource(this.listaAlumnos);
  //  this.ngAfterViewInit()
  // }
  // getCursos(){
  //    return this.listaCursos.slice();
  // }

  // abreDialogo2(id_delform:number): void{
  //   const alumno = this._alumnosListaService.getAlumnos().find(c => c.id === id_delform);
  //   const dialogRef = this.dialog.open(DetalleComponent, {
  //     data: alumno,
  //     width: '1250px',
  
  //   });
  
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log(result);
  //     this.cargarAlumnos();
  //   });

  // }

  // abrirFormi(perraId: ListaAlumnos): void {
  //   const alumno = this._alumnosListaService.getAlumnosList();
  //   const dialogRef = this.dialog.open(EditarAlumnosListaComponent , {
  //     data: alumno,
  //     width: '1250px',
  //   });}
  // }
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log(result);
  //     this.cargarAlumnos();
  //   });
  // }

