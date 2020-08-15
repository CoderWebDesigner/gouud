import { Injectable } from "@angular/core";

import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn:'root'
})
export class ProductsService{
    constructor(private http:HttpClient,private cookieService:CookieService){
        
        
    }
     
     
    private _allBestSellerUrl = 'http://jooud.com/api/product/allBestSeller';
    private _productDetailsUrl = 'http://jooud.com/api/product/record/';
    private _bestSellerBrand = 'http://jooud.com/api/brand/records/';
    private _bestSellerBrandProducts = 'http://jooud.com/api/product/records/';
    private _addCartUrl = 'http://jooud.com/api/addToCart';
    private _addFavouriteUrl = 'http://jooud.com/api/favourite/create';
    private _getCompleteOrdersUrl = 'http://jooud.com/api/order/completedRecords';
    private _getProductsInCartUrl = 'http://jooud.com/api/cart';
    private _getFavouriteProductsUrl ='http://jooud.com/api/favourite/records';
    private _addCommentUrl ='http://jooud.com/api/comment/create';
    private _removeProductFromFavouriteUrl = 'http://jooud.com/api/favourite/delete/';
    private _removeProductFromCartUrl ='http://jooud.com/api/removeFromCart';
    private _getDealsUrl ='http://jooud.com/api/dailyDeal/records';
    private _productsSearchUrl="http://jooud.com/api/product/search"

    getAllBestSeller(){
     return  this.http.get(this._allBestSellerUrl).pipe(map(res => res['data']))
    }
    getBestSellerBrandForCategory(id){
        return this.http.get(`${this._bestSellerBrand}${id}`).pipe(map(res => res['data']))
    }
    getBestSellerProductForBrand(id){
        return this.http.get(`${this._bestSellerBrandProducts}${id}`).pipe(map(res => res['data']))
    }
    getProductInfo(id:number){
        // // console.log(this._productDetailsUrl,id)
        return this.http.get(`${this._productDetailsUrl}${id}`).pipe(map(res => res['data']))
    }


    addProductToCart(productId,amount){
        let httpOptions = {
            headers: new  HttpHeaders(
                {'Authorization': localStorage.getItem('token')}
            )
        };

        // // console.log('token: ', 'Bearer ' + localStorage.getItem('token'));

        let body = {
            "product_id":productId,
            "quantity":amount
          };
        
        return this.http.post(this._addCartUrl,body,httpOptions ).pipe(map(res=> res['data']))
    }

    addProductToFavourite(id){
        let poductId = {
            product_id:id
        }
        return this.http.post(this._addFavouriteUrl,poductId).pipe(map(res=> res['data']))
    }
    getProductsInCart(){
        return this.http.post(this._getProductsInCartUrl,null).pipe(map(res=>res['data']))
    }
    getProductsInFavourite(){
        return this.http.get(this._getFavouriteProductsUrl).pipe(map(res=> res['data']))
    }
    getCompletedOrders(){
        return this.http.get(this._getCompleteOrdersUrl).pipe(map(res=> res['data']))
    }
    addComment(comment){
        return this.http.post(this._addCommentUrl,comment).pipe(map(res=>res['data']))
    }

    removeProductFromFavourite(id:number){
        return this.http.delete(`${this._removeProductFromFavouriteUrl}${id}`)
    }
    removeProductFromCart(product){
        return this.http.post(this._removeProductFromCartUrl,product)
    }
    getDeals(){
        return this.http.get(this._getDealsUrl).pipe(map(res=>res['data']))
    }
    searchForProduct(search){
        return this.http.post(this._productsSearchUrl,search).pipe(map(res=>res['data']))
    }
}