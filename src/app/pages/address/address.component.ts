import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  orderInfo:FormGroup;
  constructor(private route:ActivatedRoute,private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.orderInfo= new FormGroup({
          first_name:new FormControl(null,[Validators.required]),
          last_name:new FormControl(null,[Validators.required]),
          mobile:new FormControl(null,[Validators.required]),
          country:new FormControl(null,[Validators.required]),
          governorate:new FormControl(null,[Validators.required]),
          city:new FormControl(null,[Validators.required]),
          street_name:new FormControl(null,[Validators.required]),
          building_name:new FormControl(null,[Validators.required]),
          floor:new FormControl(null,[Validators.required]),
          flat:new FormControl(null,[Validators.required]),
          order_id:new FormControl(params['id'],[Validators.required])
    
        })
        localStorage.setItem('orderId',params['id'])
      }
    )
    
  }
  onSubmit(){
    console.log(this.orderInfo.value)
    this.cartService.orderInfo(this.orderInfo.value).subscribe(
      (result)=>{
        console.log(result)
        if(localStorage.getItem('orderId')){

          this.router.navigate(['payment'])
        }
      }
    )

  }

}
