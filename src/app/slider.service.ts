import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn:'root'
})
export class SliderService{
    private _getSliderUrl="http://jooud.com/api/advertisement/records";
    constructor(private http:HttpClient){}
    getSlider(){
    return     this.http.get(this._getSliderUrl).pipe(map(res=>res['data']))
    }
}