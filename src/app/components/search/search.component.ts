import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  products: Product[] = new Array()
  id: string;
  private pathToAssets: string = "../../assets/";


  constructor(private productService: ProductService,private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params["id"]
      this.products = productService.search(this.id);
    })
  }

  ngOnInit() {
  }
}

