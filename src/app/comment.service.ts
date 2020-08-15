import { Injectable } from "@angular/core";

import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn:'root'
})
export class CommentService{
    constructor(private http:HttpClient,private cookieService:CookieService){}
    private _addCommentUrl = 'http://jooud.com/api/comment/create';
    headers: Object = {
        headers: new HttpHeaders().append('Authorization', this.cookieService.get('token'))
    }
    addCommnet(comment:any){
        return this.http.post(this._addCommentUrl,comment,this.headers ).pipe(map(res => res['data']))

    }
    
}