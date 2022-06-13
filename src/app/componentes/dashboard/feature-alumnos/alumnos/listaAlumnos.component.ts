import { MaterialModule } from 'src/app/componentes/material/material.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Cursos } from 'src/app/sharedModule/interfaces/cursos';
import { ListaAlumnos } from 'src/app/sharedModule/interfaces/alumnos';
import { Router } from '@angular/router';
import { ListaAlumnosService } from '../servicios/listaAlumnos.service';
import { EditarAlumnosListaComponent } from '../editar-alumnos-lista/editar-alumnos-lista.component';
import { DetalleComponent } from '../detalles/detalle.component';


@Component({
  selector: 'app-reportes',
  templateUrl: './listaAlumnos.component.html',
  styleUrls: ['./listaAlumnos.component.scss']
})
export class ListaAlumnosComponent implements OnInit {
  admin:boolean = false;
  datosUsuario: string;

  listaCursos: Cursos[] = [];
  listaEstudiantes: ListaAlumnos[] = [];

  displayedColumns: string[] = ['nombre', 'edad', 'correo', 'telefono', 'acciones'];
  
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor  (    
    private _alumnosListaService:ListaAlumnosService,
    private _snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog
    ) {}

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
    this.cargarEstudiantes();
    this.validaRol();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }
  cargarEstudiantes(){
    this.listaEstudiantes = this._alumnosListaService.getEstudiantes();
    this.dataSource = new MatTableDataSource(this.listaEstudiantes);
   this.ngAfterViewInit()
  }
  getCursos(){
     return this.listaCursos.slice();
  }
  getEstudiantes(){
     return this.listaEstudiantes.slice();
  }
  openDialog2(id_delform:number): void{
    const estudiante = this._alumnosListaService.getEstudiantes().find(c => c.id === id_delform);
    const dialogRef = this.dialog.open(DetalleComponent, {
      data: estudiante,
      width: '1250px',
  
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.cargarEstudiantes();
    });

  }

  openDialog(id_delform:number): void {
    const estudiante = this._alumnosListaService.getEstudiantes().find(c => c.id === id_delform);
    const dialogRef = this.dialog.open(EditarAlumnosListaComponent , {
      data: estudiante,
      width: '1250px',
  
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.cargarEstudiantes();
    });
    
  }
  eliminarEstudiante(index: number){
    console.log(index);
    this._alumnosListaService.eliminarEstudiante(index);
    this.cargarEstudiantes();
    this._snackBar.open('Estudiante eliminado con exito','', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1500,
    })
  }

}