import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  products: Product[] = new Array()
  category: string = "";
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let category: string = params["id"];
      this.category = category;
      if (this.category == "") {
        this.router.navigate(["/"]);
      }
      this.products = this.productService.findByCategory(this.category);
    })
  }

}