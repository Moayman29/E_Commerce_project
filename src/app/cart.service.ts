import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  count = '';
  cartNumber:BehaviorSubject<number> = new BehaviorSubject(0);
  
  constructor(private _http: HttpClient) {}

  getCart(): Observable<any> {
    return this._http.get('https://ecommerce.routemisr.com/api/v1/cart');
  }

  addProductToCart(id: any): Observable<any> {
    return this._http.post(
      'https://ecommerce.routemisr.com/api/v1/cart',
      { productId: id });
  }

  deleteItem(id: any): Observable<any> {
    return this._http.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`);
  }

  updateItem(id: any,count:any): Observable<any> {
    return this._http.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      { count: count });
  }

  
}
