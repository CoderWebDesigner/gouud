import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-branddetail',
  templateUrl: './branddetail.component.html',
  styleUrls: ['./branddetail.component.css']
})
export class BranddetailComponent implements OnInit {
  brands;
  brandName
  constructor(private productService:ProductsService,private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.getBrandProducts()
  }
  getBrandProducts(){
    this.route.params.subscribe(
      (params:Params)=>{
        this.productService.getBestSellerProductForBrand(+params['id']).subscribe(
          (result)=>{
            this.brands = result
            // console.log(result)
            this.brandName = result[0].brand.name_en
          }
        )
      }
    )
  }
}
