import { Injectable } from '@angular/core';
import { Brand, ALLBRANDS, Brands } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private brands: Brand[] = new Array();

  constructor() {
      ALLBRANDS.forEach(b => {
          let brand = new Brand()
          brand.description1 = b.description1
          brand.description2 = b.description2
          brand.id = b.id
          brand.name = b.name
          brand.comments = b.comments
          brand.photo1 = b.photo1
          brand.photo2 = b.photo2

          this.brands.push(brand)
      })

      this.brands.sort((a, b) => a.name.localeCompare(b.name))
  }

  getBrands() {
      return this.brands
  }

  findBrandById(id: string) : Brand {
      let i = this.getSelectedIndex(id)
      return i < 0 ? null : this.brands[i]
  }

  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.brands.length; i++) {
      if (this.brands[i].id === id) {
        return i;
      }
    }
    return -1;
  }

  findBrandAndExclude(brand1: string, brand2: string){
    var b: Brand[] = new Array()
    this.brands.forEach(element => {
      if (element.name != brand1 && element.name != brand2) {
        b.push(element)
      }
    });
    return b;
  }
}