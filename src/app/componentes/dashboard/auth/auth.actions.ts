import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/sharedModule/interfaces/usuarios';


export const loginAction = createAction(
  '[Auth] Iniciar Sesion',
  props<{ usuario: any; contrasena: any }>()
);

export const cargarSesion = createAction(
  '[Auth] Cargar Sesion',
  props<{ data: Usuario }>()
);

export const cerrarSesion = createAction('[Auth] Cerrar Sesion');
