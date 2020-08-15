import { Injectable } from "@angular/core";

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class AdvertisingService{
    constructor(private http:HttpClient){}
    private _getAdvertisingUrl = 'http://jooud.com/api/advertisement/records';

    getAdvertising(){
     return  this.http.get(this._getAdvertisingUrl).pipe(map(res => res['data']))
    }
}