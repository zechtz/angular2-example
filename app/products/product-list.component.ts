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
   //listFilter:    string     = 'cart';
   errorMessage:  string 
   products:      IProduct[];

   constructor(private _productService: ProductService){
   }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    this._productService.getProducts()
    .subscribe(
      products => this.products = products,
        error => this.errorMessage = <any>error);
  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message; 
  }
}
