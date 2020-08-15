import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  deals
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.listDeals()
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
