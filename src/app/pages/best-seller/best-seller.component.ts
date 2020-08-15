import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent implements OnInit {
  bestSeller;
  brandName
  constructor(private productService:ProductsService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params:Params)=>{
        this.productService.getBestSellerProductForBrand(+params['id']).subscribe(
          (result)=>{
            this.bestSeller = result
            // console.log(result)
            this.brandName = result[0].brand.name_en
          }
        )
      }
    )
    
  }

}
