import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ScriptService } from '../../services/script.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = new Array()
  trending: Product[] = new Array()

  constructor(private productService: ProductService, private script: ScriptService) {

  }

  ngOnInit() {
    this.products = this.productService.findRandom(6);
    this.trending = this.productService.findRandom(8);
  }
}