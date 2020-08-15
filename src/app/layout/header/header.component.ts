/// <reference types="@types/googlemaps" />

import { Component, OnInit, OnChanges,  SimpleChanges, TemplateRef, ViewChild, ElementRef, NgZone, AfterViewInit, ViewChildren, Output, Input } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriesService } from 'src/app/categories.service';
import {TranslateService} from '@ngx-translate/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MapsAPILoader } from '@agm/core';
import { ProductsService } from 'src/app/products.service';
import { CartComponent } from 'src/app/pages/cart/cart.component';
import { CartService } from 'src/app/cart.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser = null;
  isAuth:boolean 
  categories
  collapsed = true;
  firstCategory;
  @ViewChild('search') public searchElementRef: ElementRef;

  cart;
  modalRef: BsModalRef;
  productInCartCount = 0;
  totalProductInCartPrice =0;
  searchedProducts:Object[]=[]

  constructor(private cartService:CartService,private modalService: BsModalService,public authService:AuthService,private categoriesService:CategoriesService,private cookieService:CookieService,private router:Router,private productService:ProductsService) {

  }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  

  ngOnInit(): void {
    this.getCategories()
    this.getCartInfo()
    
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  logout(){
    this.authService.logout()
    this.router.navigate(['auth/login'])
  }
  getCategories(){
    this.categoriesService.getCategories().subscribe(
      (result)=>{
        this.categories = result
        this.firstCategory = this.categories[0].id;
      }
    )
  }
  getCartInfo(){
    // setInterval
    this.productService.getProductsInCart().subscribe(
      (result)=>{
        console.log(result)
        this.productInCartCount = result.order_details.length
        this.totalProductInCartPrice = result.cost
      }
    )
    
    
    // console.log(this.cart)
  //  this.cart=this.totalProductInCartPrice
  }
  search(value){
    let query={
      field:'name_en',
      query:value
    }
    this.productService.searchForProduct(query).subscribe(
      (result)=>{
        console.log(result)
        this.searchedProducts= result
        if(this.searchedProducts.length==0){
          this.searchedProducts.push({name_en:'no product found !'})
        }
      }
    )
  }
  resetSearch(){
    this.searchedProducts = [];
  }

 
}
