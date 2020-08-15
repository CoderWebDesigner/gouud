import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { map } from 'rxjs/operators';
@Injectable({
    providedIn:'root'
})
export class AuthService {
    constructor(private http:HttpClient,private cookieService:CookieService){}
    private _loginUrl = 'http://jooud.com/api/login';
    private _registerUrl = 'http://jooud.com/api/register';
    private isAuth:boolean ;

    login(userDate){
     return   this.http.post(this._loginUrl,userDate).pipe(map(res => res['data']))
    }
    register(userDate){
        return   this.http.post(this._registerUrl,userDate).pipe(map(res => res['data']))
    }
    isLogin(){
        this.isAuth = (localStorage.getItem('token') ==null)?false : true;
        return this.isAuth
    }
    logout(){
        localStorage.removeItem('token')
    }
}