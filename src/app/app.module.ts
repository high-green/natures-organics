import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { SearchComponent } from './components/search/search.component';
import { ScriptService } from './services/script.service';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { ApiService } from './services/api.service';
import { APIPostService } from './services/post.service';
import { SEOService } from './services/seo.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { TransferHttpModule, TransferHttpService } from '@gorniv/ngx-universal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { JobComponent } from './components/job/job.component';
import { CardModule } from 'ngx-card';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    ProductComponent,
    CategoryComponent,
    CheckoutComponent,
    CartComponent,
    SearchComponent,
    AboutComponent,
    ContactComponent,
    ReviewsComponent,
    JobComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    TransferHttpModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
    CartService,
    ApiService,
    ScriptService,
    SEOService,
    APIPostService,
    TransferHttpService
  ],
})
export class AppModule { }
