import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  favouriteProducts
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.getProductInFavourite()
  }

  getProductInFavourite(){
    this.productService.getProductsInFavourite().subscribe(
      (result)=>{
        // console.log(result)
        this.favouriteProducts = result
      }
    )
  }



}
