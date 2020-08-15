import { Injectable } from "@angular/core";

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class CountryService{
    constructor(private http:HttpClient){}
    private _countriesUrl = 'http://jooud.com/api/country/records';

    getCountries(){
     return  this.http.get(this._countriesUrl).pipe(map(res => res['data']))
    }
    
}