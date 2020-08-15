import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/offers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offers;
  category;
  constructor(private offerService:OfferService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.getOffers()

  }

  getOffers(){
    this.route.params.subscribe(
      (params:Params)=>{

        this.offerService.getOffers(params['name']).subscribe(
          (result)=>{
            console.log(result)
            this.offers = result;
            this.category = params['name']
          }
        )
      }
    )
  }

}
