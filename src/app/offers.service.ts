import { Injectable } from "@angular/core";

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class OfferService{
    constructor(private http:HttpClient){}
    private _getOffersUrl = 'http://jooud.com/api/offer/records/';

    getOffers(name:string){
     return  this.http.get(`${this._getOffersUrl}${name}`).pipe(map(res => res['data']))
    }
    
}