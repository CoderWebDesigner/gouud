import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { CartService } from 'src/app/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartDetails;
  public totalPrice: number = 0;
  public productNumber:number=0;
  productIds: string[] = [];
  quantities: string[] = [];
  orderId: number;
  constructor(private productService: ProductsService, private cartService: CartService, private router: Router) { }
  ngOnInit(): void {
    this.getProductsInCart();
    
    
  }
  removeFromCart(id: number) {
    let product = {
      product_id: id
    }
    this.productService.removeProductFromCart(product).subscribe(
      (result) => {

        this.getProductsInCart();
        this.getTotalPrice()
      }
    )

  }
  increase(value) {
    value.quantity += 1

    this.getTotalPrice()
  }

  decrease(value) {
    if (value.quantity > 1) {

      value.quantity -= 1;
      this.getTotalPrice()
    }
  }
  getTotalPrice() {
    this.totalPrice = this.cartDetails.order_details.reduce(function (total, currentValue, currentIndex, arr) {
      return total + (currentValue.quantity * currentValue.price)
    }, 0)
  }
  getProductsInCart() {
    this.productService.getProductsInCart().subscribe(
      (result) => {
        console.log(result)
        this.cartDetails = result;
        this.productNumber = this.cartDetails.order_details.length
        this.orderId = result.id
        this.getTotalPrice();
        this.cartService.getCart(this.cartDetails)
        localStorage.setItem('cart',JSON.stringify(this.cartDetails))
      }
    )
  }

  orderSet() {
    this.productIds = [];
    this.quantities = [];
    for (let i = 0; i < this.cartDetails.order_details.length; i++) {
      this.productIds.push(this.cartDetails.order_details[i].product_id);
      this.quantities.push(this.cartDetails.order_details[i].quantity);
    }
    let order = {
      product_ids: this.productIds.toString(),
      quantities: this.quantities.toString()
    }


    this.cartService.setOrder(this.orderId, order).subscribe(
      (result) => {
        console.log(result)
        this.router.navigate(['/address',this.orderId])
      }
    )
  }

 
}
