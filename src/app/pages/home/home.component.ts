import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ProductsService } from 'src/app/products.service';
import { CategoriesService } from 'src/app/categories.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allBestSeller;
  categoryName;
  brands;
  deals
  constructor(private productService:ProductsService,private categoryService:CategoriesService) { }

  ngOnInit(): void {
    this.listProducts()
    this.listCategories()
    this.listDeals()
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
  listCategories(){
    this.categoryService.getCategories().subscribe(
      (result)=>{
        // console.log(result[0].id)
        this.productService.getBestSellerBrandForCategory(result[0].id).subscribe(
          (result)=>{
            this.brands = result
            // console.log(result)
          }
        )
      }
    )
  }
  listDeals(){
    this.productService.getDeals().subscribe(
      (result)=>{
        this.deals = result;
        // console.log(this.deals)
      }
    )
  }
}
