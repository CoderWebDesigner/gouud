


import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
    providedIn:'root'
})
export class AuthGaurdService implements CanActivate{
    constructor(private authService:AuthService,private router:Router,private cookieService:CookieService){}
    isAuth:boolean 
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
        if (this.authService.isLogin()) {
            return true;
          } else {
            this.router.navigate(['auth/login'])
            return false;
          }
    }
}