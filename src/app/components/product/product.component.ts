import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { UNITS } from '../../models/price';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Title } from '@angular/platform-browser';
import { Item } from '../../models/item';
import { Quantity } from '../../models/quantity';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product = new Product();
  products: Product[] = [];
  category: string = "";
  units = UNITS;
  chosenUnit: string = UNITS[0].name;
  quant: number = 1;
  keyUp = ""
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private titleService: Title) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id: string = params["id"];
      this.category = params["category"];
      this.product = this.productService.find(id)
      this.chosenUnit = this.product.prices[0].unit;
      this.products = this.productService.findRandomAndExcludeOne(5, id);
      if (!this.product) {
        this.router.navigate(["/"]);
      }
    })
    this.titleService.setTitle("Buy " +this.product.name +" online")
  }

  addToCart() {
    if (this.keyUp)
      this.quant = parseFloat(this.keyUp);
    if (this.chosenUnit && Number.isFinite(this.quant) && !(this.quant <= 0)) {
      let item: Item = new Item();
      let quant: Quantity = new Quantity();
      quant.quantity = this.quant;
      quant.unit = this.chosenUnit;
      item.product = this.product;
      item.quantity = quant;
      this.cartService.add(item);
    }
    else {
      this.quant = 1;
      Swal({
        title: 'Bad Quantity',
        text: 'Please enter a non zero quantity value to proceed',
        type: 'warning',
        confirmButtonText: 'Ok got it!',
        confirmButtonColor: '#7cca31'
      })
    }
  }

  addQuant() {
    if (this.keyUp) {
      this.quant = parseFloat(this.keyUp);
      this.keyUp = "";
    }
    this.quant += 1;
  }

  reduceQuant() {
    if (this.keyUp) {
      this.quant = parseFloat(this.keyUp);
      this.keyUp = "";
    }
    if ((this.quant - 1) <= 0)
      this.quant = 0;
    else
      this.quant -= 1;
  }

  onQuantityChange(value: string) {
    this.keyUp = value;
  }

  getProductIndex() {
    return this.productService.getProductIndex(this.product);
  }

}
