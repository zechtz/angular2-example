import { Injectable }     from 'angular2/core';
import { IProduct }       from './product';
import { Http, Response } from 'angular2/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ProductService{
  private _productUrl = '../../api/products/products.json';

  constructor(private _http: Http){
  }

  //returns a json object of products from the url 
  getProducts(): Observable<IProduct[]>{
    return this._http.get(this._productUrl)
    .map((response: Response) => <IProduct[]>response.json())
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'server error' );
  }
}

