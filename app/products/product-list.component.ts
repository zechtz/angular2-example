import { Component, OnInit } from 'angular2/core';
import { IProduct}           from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent }     from '../shared/star.component';
import { ProductService }    from './product.service';

@Component({
   selector:      'pm-products',
   templateUrl:   'app/products/product-list.component.html',
   styles:        [`thead{ color: #337AB7; }`],
   directives:    [StarComponent],
   pipes:         [ProductFilterPipe]
})
export class ProductListComponent implements OnInit{
   pageTitle:     string     = 'Product List';
   imageWidth:    number     = 50;
   imageMargin:   number     = 2;
   showImage:     boolean    = false;
   listFilter:    string     = 'cart';
   products:      IProduct[];

   constructor(productService: ProductService){
     this.products = productService.getProducts();
   }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void{
    console.log('on init angular2 is running..');
  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message; 
  }
}
