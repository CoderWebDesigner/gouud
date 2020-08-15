import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-previousorders',
  templateUrl: './previousorders.component.html',
  styleUrls: ['./previousorders.component.css']
})
export class PreviousordersComponent implements OnInit {
  previousOrders;
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.getPreviousOrders()
  }

  getPreviousOrders(){
    this.orderService.getPreviousOrders().subscribe(
      (result)=>{
        console.log(result)
        this.previousOrders = result
      }
    )
  }

}
