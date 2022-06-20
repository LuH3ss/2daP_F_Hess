import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/sharedModule/auth.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent implements OnInit {
  form:FormGroup;
  load:boolean = false;
  datoUsuario: string | null;

  constructor( private store: Store,private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, 
    private authService: AuthService) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  ingreso(){
    const usuario = this.form.value.usuario;
    const contraseña = this.form.value.contraseña;

    if(usuario === 'administracion' && contraseña === 'administracion'){
      localStorage.setItem('rol','admin');
      this.datoUsuario = localStorage.getItem('rol');
      console.log(this.datoUsuario);

      this.cargando();

    }else if(usuario=== 'usuario' && contraseña =="usuario")
      {
        localStorage.setItem('rol','usuario');
        this.datoUsuario = localStorage.getItem('rol');
        console.log(this.datoUsuario);
        this.cargando();
      }
      else
      this.error();
      this.form.reset();
    }
  

  error(){
    this._snackBar.open('Usuario o contraseña incorrecta','', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2000,
    })
  }

  cargando(){
    this.load=true;
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 1500);
  }
}
