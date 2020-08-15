import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product;
  @Input() categoryName
  @Output() removeF = new EventEmitter();
  constructor(private productService:ProductsService,private toastrService:ToastrService,private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }
  addCart(productId,amount){
    let isLogged = this.authService.isLogin()
    if(isLogged){
      this.productService.addProductToCart(productId, amount).subscribe(
        (result)=>{
          // console.log('result: ',result)
          this.toastrService.success(`added to cart successfully `, 'success');
          this.product.inCart = true;
          // // console.log(this.allBestSeller)
        },
        (error)=>{
          this.toastrService.error(` the product is already exist in cart `)
          console.log(error)
        }
        )
      }else{
        this.router.navigate(['auth/login'])
      }
      
    }
  removeFromCart(id:number){
    let product={
      product_id:id
    }
    this.productService.removeProductFromCart(product).subscribe(
      (result:any)=>{
        this.toastrService.success(`the product removed from  cart successfully `, 'success');
        this.product.inCart = false;
        
      }
    )

  }
  addFavourite(id:number){
    // console.log(id)
   
    
    this.productService.addProductToFavourite(id).subscribe(
      (result)=>{
        console.log(result);
        this.toastrService.success(`added to favourite successfully `, 'success');
        this.product.favourite = true;
      },
      (error)=>{
        if(error.status == 401){
          this.router.navigate(['auth/login'])
        }
        console.log(error.status)
      }
    )
  }
  removeFavourite(id){
    // console.log()
    this.productService.removeProductFromFavourite(id).subscribe(
      (result)=>{
        // console.log(result)
        this.toastrService.success(`the product removed from  favourite successfully `, 'success');
        this.product.favourite = false;
        this.getFavouriteList()
      }
    )
  }
  getFavouriteList(){
    this.productService.getProductsInFavourite().subscribe(
      (result)=>{
         console.log(result)
      }
    )
  }

}
