import { Component, OnInit } from '@angular/core';
import { Product, PRODUCTS } from '../../models/product';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Quantity } from '../../models/quantity';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartNumber: number = 0;
  products = PRODUCTS;
  searchString = "";
  cartItems: CartItem[] = new Array();
  total: number = 0;
  constructor(private cartService: CartService, private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.cartService.getCartNumber().subscribe(data => {
      this.cartNumber = data;
      this.total = this.cartService.total();
    })
    this.cartService.getItems().subscribe(data => {
      this.cartItems = data;
    })
    
  }

  printQuantity(item: CartItem) {
    let quantities = item.quantities;

    let all: string = "";
    for(var i = 0; i < quantities.length; i++) {
      if(i == 0)
        all = quantities[i].quantity + " - " + quantities[i].unit
      else
        all = all + " & " + quantities[i].quantity + " - " + quantities[i].unit
    }
    return all;
  }

  itemTotal(item: CartItem): number {
    let prices = item.product.prices;
    let map: Map<string, number> = new Map<string, number>()
    for(var i = 0; i < prices.length; i++) {
      map.set(prices[i].unit, prices[i].amount)
    }

    let total = 0;
    item.quantities.forEach((quantity: Quantity) => {
      total += map.get(quantity.unit) * quantity.quantity;
    });

    return total;
  }

  search() {
    if(this.searchString !== "") {
      this.router.navigate(["search/"+this.searchString.replace(" ", "+")])
    }
  }

}

