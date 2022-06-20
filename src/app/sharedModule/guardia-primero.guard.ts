import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../sharedModule/auth.service';
@Injectable({
  providedIn: 'root'
})
export class GuardiaPrimeroGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      if (!this.auth.isLogin) {
      this.router.navigate(['']).then(()=> true)
      }
    return true;
  }
  
}
