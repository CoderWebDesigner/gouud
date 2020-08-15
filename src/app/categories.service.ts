import { Injectable } from "@angular/core";

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class CategoriesService{
    constructor(private http:HttpClient){}
    private _categoriesUrl = 'http://jooud.com/api/department/records';

    getCategories(){
     return  this.http.get(this._categoriesUrl).pipe(map(res => res['data']))
    }
    // getFirstCategory(){
    //     return this.http.get(this._categoriesUrl).pipe(map(res=>res['data'][0]))
    // }
}