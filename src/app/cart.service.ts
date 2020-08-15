import { Injectable } from "@angular/core";

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class CartService{
    constructor(private http:HttpClient){}
    private _setOrderUrl="http://jooud.com/api/order/setOrder/";
    private _orderInfoUrl="http://jooud.com/api/order/setUserInfo";
    private _addOrderUrl="http://jooud.com/api/order/finishOrder/";
    private _getProductsInCartUrl = 'http://jooud.com/api/cart';
    private data = new BehaviorSubject<Object>({})
    currentData = this.data.asObservable()
    setOrder(id,order){
      return  this.http.post(`${this._setOrderUrl}${id}`,order )
    }
    orderInfo(order){
        return  this.http.post(this._orderInfoUrl,order ).pipe(map(res=>res['data']))
    }
    addOrder(id,payment){
        return this.http.post(`${this._addOrderUrl}${id}`,payment).pipe(map(res=>res['data']))
    }
    getProductsInCart(){
        return this.http.post(this._getProductsInCartUrl,null).pipe(map(res=>res['data']))
    }
    getCart(cart:any){
        this.data.next(cart);
        
    }
}