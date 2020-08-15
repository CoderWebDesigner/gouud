import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn:'root'
})
export class OrderService{
    private _getCurrentOrdersUrl="http://jooud.com/api/order/paidRecords";
    private _getPreviousOrdersUrl="http://jooud.com/api/order/completedRecords";
    private _cancelOrderUrl="http://jooud.com/api/order/cancel/";
    constructor(private http:HttpClient){}
    getCurrentOrders(){
        return     this.http.get(this._getCurrentOrdersUrl).pipe(map(res=>res['data']))
    }
    getPreviousOrders(){
        return     this.http.get(this._getPreviousOrdersUrl).pipe(map(res=>res['data']))
    }
    cancelOrder(id){
        return this.http.delete(`${this._cancelOrderUrl}${id}`).pipe(map(res=>res['data']))
    }
}