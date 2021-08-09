import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = new Array()
  maxProducts: number = 9;
  numberPages: number = 1;
  currentPage: number = 1;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      let page: number = params["page"];
      this.currentPage = page;
      let allProducts = this.productService.findAll();
      this.numberPages = Math.ceil(allProducts.length / this.maxProducts)
      if (this.currentPage < 1 || this.currentPage > this.numberPages) {
        this.router.navigate(["/"]);
      }
      this.products = this.productService.slice(allProducts, ((this.currentPage - 1) * this.maxProducts), this.currentPage * this.maxProducts)
    })
  }

  getPagesArray() {
    let pages = this.numberPages
    return Array(pages).fill(1).map((x, i) => i + 1)
  }
}

