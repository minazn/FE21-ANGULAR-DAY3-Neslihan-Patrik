import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items :any;
  checkoutForm;
  constructor(private CS: CartService, private FB: FormBuilder) {
    this.checkoutForm = this.FB.group({
      name: '',
      address: ''
 
    });
   }

  ngOnInit(): void {
    this.items = this.CS.getItems();
  }

  onSubmit(customerData:any) {

    // Process checkout data here
    console.warn('Your order has been submitted', customerData);  
    this.items = this.CS.clearCart();
    this.checkoutForm.reset();
  
  }

}
