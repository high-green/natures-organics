import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/api/contact';
import { Product } from '../../models/product';
import { ApiService } from '../../services/api.service';
import { ProductService } from '../../services/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: Contact = new Contact();
  isLoading = false;
  buttonMsg = "Send Message";
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
        text: 'Thank you! You message has been received. We will contact you as soon as possible',
        type: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#7cca31'
      })
      this.contact = new Contact();
      this.isLoading = false;
      this.buttonMsg = "Send Message";
    },
      (err: HttpErrorResponse) => {
        this.isLoading = false;
        Swal({
          title: 'Error!',
          text: 'Unable to send message. Make sure you are connected to the internet',
          type: 'warning',
          confirmButtonText: 'Ok got it!',
          confirmButtonColor: '#7cca31'
        })
        this.buttonMsg = "Send Message";
      });

  }
}
