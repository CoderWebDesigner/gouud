import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-all-bestseller',
  templateUrl: './all-bestseller.component.html',
  styleUrls: ['./all-bestseller.component.css']
})
export class AllBestsellerComponent implements OnInit {
  allBestSeller;
  brandName
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.getAllBestSeller().subscribe(
      (result)=>{
        // for(let brand of result){


        // }
        // result.[0].name_en
        // // console.log(result)
        this.allBestSeller =  result;
        // console.log(this.allBestSeller)
      }
    )
  }

}
