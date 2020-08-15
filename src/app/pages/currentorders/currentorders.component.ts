import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-currentorders',
  templateUrl: './currentorders.component.html',
  styleUrls: ['./currentorders.component.css']
})
export class CurrentordersComponent implements OnInit {
  currentOrders
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.getCurrentOrders()
  }
  getCurrentOrders(){
    this.orderService.getCurrentOrders().subscribe(
      (result)=>{
        console.log(result)
        this.currentOrders = result
      }
    )
  }
  cancelOrder(id:number){
    this.orderService.cancelOrder(id).subscribe(
      (result)=>{
        console.log(result)
        this.currentOrders = this.currentOrders.filter(e => e.id !== id)
        // var index = this.currentOrders.indexOf(id);
        // this.currentOrders.splice(index, 1);
        console.log(this.currentOrders)
      }
    )
  }
}
