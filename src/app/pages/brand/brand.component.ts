import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands;
  brandName
  constructor(private productService:ProductsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBrandProducts()
  }
  getBrandProducts(){
    this.route.params.subscribe(
      (params:Params)=>{
        this.productService.getBestSellerBrandForCategory(+params['id']).subscribe(
          (result)=>{
            // console.log(result)
            this.brands = result;
            // console.log(this.brands);
            // console.log(this.departmentName)
          }
        )
      }
    )
  }
}
