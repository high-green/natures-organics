import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchComponent } from './components/search/search.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { JobComponent } from './components/job/job.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {title: 'Welcome Home'}},
  { path: 'about', component: AboutComponent, data: {title: 'About Us'}},
  { path: 'contact', component: ContactComponent, data: {title: 'Contact Us'}},
  { path: 'cart', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent, data: {title: 'Checkout page'}},
  { path: 'reviews', component: ReviewsComponent, data: {title: 'Reviews'}},
  { path: 'job-offer', component: JobComponent, data: {title: 'Job Opportunity'}},
  { path: 'search/:id', component: SearchComponent, data: {title: 'Search Results'}},
  { path: 'product/:category/:id', component: ProductComponent},
  { path: 'products/page/:page', component: ProductsComponent},
  { path: 'products', redirectTo: 'products/page/1'},
  { path: 'category/:id', component: CategoryComponent},
  { path: '404', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
