import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/api/contact';
import { Product } from '../../models/product';
import { ApiService } from '../../services/api.service';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  contact: Contact = new Contact();
  isLoading = false;
  buttonMsg = "Apply";
  products: Product[] = new Array();
  constructor(private apiService: ApiService, private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.findRandom(6);
  }

  submit() {
    this.buttonMsg = "Loading..."
    this.apiService.contact(this.contact)
    .subscribe((data: any) => {
      this.isLoading = true;
      Swal({
        title: 'Thanks!',
        text: 'Thank you! Your application has been received. We will contact you as soon as possible',
        type: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#7cca31'
      })
      this.contact = new Contact();
      this.isLoading = false;
      this.buttonMsg = "Apply";
    },
      (err: HttpErrorResponse) => {
        this.isLoading = false;
        Swal({
          title: 'Error!',
          text: 'Unable to Apply. Make sure you are connected to the internet',
          type: 'warning',
          confirmButtonText: 'Ok got it!',
          confirmButtonColor: '#7cca31'
        })
        this.buttonMsg = "Apply";
      });

  }
}
