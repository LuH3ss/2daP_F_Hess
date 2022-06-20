import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class GuardiaPrimeroGuard implements CanActivate {
  constructor( private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let sesion = JSON.parse(localStorage.getItem('session') || '{}');

      if (sesion.activa) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    }

  
}
