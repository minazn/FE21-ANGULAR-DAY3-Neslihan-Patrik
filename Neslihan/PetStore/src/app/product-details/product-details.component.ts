import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: {name: string, price: number, description?: string} = {name:"", price:0};
  constructor(private route: ActivatedRoute, private CS: CartService) { }

  addToCart(product:any) {
    window.alert('Your product has been added to the cart!');
    this.CS.addToCart(product);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id : number = Number(params.get("id"));
      this.product = products[id]; 
      console.log(this.product) 
    });
  }

}
