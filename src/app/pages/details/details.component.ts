import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { CommentService } from 'src/app/comment.service';
import { AuthService } from 'src/app/auth.service';
import { CounterService } from 'src/app/counter.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product ;
  totalPrice:number = 0;
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1,asNavFor:".slider-nav",};
  slideThumbs = {"slidesToShow": 6, "slidesToScroll": 4,asNavFor:".slider-for",};
  constructor(private router:Router,private route: ActivatedRoute,private productService:ProductsService,public authService:AuthService,private toastrService:ToastrService) { }
  rate;
  comment:string;
  counter:number = 1;
  allBestSeller;
  categoryName;
  ngOnInit(): void {
    this.getProductInfo();
    this.listProducts()
  }
  addComment(id:number){
    let productComment = {
      product_id:id,
      text:this.comment,
      rate:(this.rate == undefined)?0:this.rate
    }
    this.productService.addComment(productComment).subscribe(
      (result)=>{
        let user= JSON.parse(localStorage.getItem('user'))
        let comment= {
          product_id:id,
          text:this.comment,
          rate:(this.rate == undefined)?0:this.rate,
          user
        }
        this.product.comments.push(comment)
        
        console.log(result)
      }
    )
    
  }
  increase(){
    this.counter += 1
  }
  decrease(){
    if(this.counter>1){

      this.counter -= 1
    }
    // console.log(this.counter)
  }
  getProductInfo(){
    this.route.params.subscribe(
      (params:Params)=>{
       
        this.productService.getProductInfo(+params['id']).subscribe(
          (result)=>{
            this.product = result;
            console.log(this.product)
            
          }
        )
      }
    )
  }
  listProducts(){
    this.productService.getAllBestSeller().subscribe(
      (result)=>{
        this.allBestSeller =  result[0].product;
        // console.log(this.allBestSeller)
        this.categoryName = result[0].department.name_en;
      }
    )
  }
  addFavourite(id:number){
    // console.log(id)
    
    this.productService.addProductToFavourite(id).subscribe(
      (result)=>{
        // console.log(result);
        this.toastrService.success(`added to favourite successfully `, 'success');
        this.product.favourite = true;
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
  
      }
    )
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
}
