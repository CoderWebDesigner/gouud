import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {

  constructor(private cartService:CartService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    
  }
  orderNow(){
    let orderId= localStorage.getItem('orderId')
    let paymentMethod={
      payment:'cash'
    }
    this.cartService.addOrder(orderId,paymentMethod).subscribe(
      (result)=>{
        console.log(result)
        
        this.toastrService.success(`your request has been sent to managment with a successor manage it . `, 'the request had been sent successfully')
      }
    )
  }
}
