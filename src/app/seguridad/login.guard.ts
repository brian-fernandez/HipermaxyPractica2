import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

constructor(private rutaLogin: Router)
{

}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('email') === null) {
      this.rutaLogin.navigate(['login']);
      const ocultar = document.getElementById('navv');
        ocultar.style.display = 'none';
        const mostrar = document.getElementById('foot');
        mostrar.style.display = 'none';
      return false;

    }else{
      return true;
     }
  }

}
