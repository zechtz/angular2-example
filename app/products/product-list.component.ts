import { Component, OnInit } from 'angular2/core';
import { IProduct}           from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent }     from '../shared/star.component';

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
   products:      IProduct[] = [
    {
      "productId":        1,
      "productName":      "Leaf Rake",
      "productCode":      "GDN-0011",
      "releaseDate":      "March 19, 2016",
      "description":      "Leaf rake with 48-inch wooden handle.",
      "price":            19.95,
      "starRating":       3.2,
      "imageUrl":         "../app/images/Anonymous_Leaf_Rake.png"
    },
    {
      "productId":        2,
      "productName":      "Garden Cart",
      "productCode":      "GDN-0023",
      "releaseDate":      "March 18, 2016",
      "description":      "15 gallon capacity rolling garden cart",
      "price":            32.99,
      "starRating":       4.2,
      "imageUrl" :        "../app/images/garden_cart.png"
    },
    {
      "productId":        5,
      "productName":      "Hammer",
      "productCode":      "TBX-0048",
      "releaseDate":      "May 21, 2016",
      "description":      "Curved claw steel hammer",
      "price":            8.9,
      "starRating":       4.8,
      "imageUrl":         "../app/images/rejon_Hammer.png"
    },
    {
      "productId":        8,
      "productName":      "Saw",
      "productCode":      "TBX-0022",
      "releaseDate":      "May 15, 2016",
      "description":      "15-inch steel blade hand saw",
      "price":            11.55,
      "starRating":       3.7,
      "imageUrl":         "../app/images/egore911_saw.png"
    },
    {
      "productId":        10,
      "productName":      "Video Game Controller",
      "productCode":      "GMG-0042",
      "releaseDate":      "October 15, 2015",
      "description":      "Standard two-button video game controller",
      "price":            35.95,
      "starRating":       4.6,
      "imageUrl":         "../app/images/xbox-controller_01.png"
    }
  ];
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void{
    console.log('on init angular2 is running..');
  }
}
