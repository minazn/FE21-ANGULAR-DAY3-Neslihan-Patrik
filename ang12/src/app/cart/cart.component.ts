import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Form, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : any;
  checkOutForm: any;
  total : number = 0;

  constructor(private CS : CartService, private FB : FormBuilder) {
    this.checkOutForm = this.FB.group({
      name : "",
      address : ""
    })
   }
  ngOnInit(): void {
    this.cart = this.CS.getItems();
    this.calc();
  }

  onSubmit(data: {name:string, address: string}) {
    console.warn("You order has been  submitted", data);
    this.cart = this.CS.cleanCard();
    this.checkOutForm.reset();
    this.total = 0;
  }
  calc() {
  for(let val of this.cart) {
      this.total += val.price;
      console.log(this.total);
  }
}
}
