import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 
  products: Product[] = new Array()
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.findAll()
  }

}
