import { Injectable } from "@angular/core";

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class UserService{
    constructor(private http:HttpClient){}
    private _getUserInfoUrl="http://jooud.com/api/getUserInfo";
    private _editUserInfoUrl="http://jooud.com/api/setProfile";
    
    
    getUserInfo(){
        return this.http.get(this._getUserInfoUrl).pipe(map(res=>res['data']))
    }
    editUser(user){
        return this.http.post(this._editUserInfoUrl,user).pipe(map(res=>res['data']))
    }
}