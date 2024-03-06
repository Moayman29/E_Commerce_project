import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private _http: HttpClient) {}

  buyCart(id: any, address: any): Observable<any> {
    return this._http.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?http://localhost:4200/api/v1/orders/user/${id}`,
      {shippingAddress: address});
  };
  
  getUserOrders(id: any):Observable<any> {
    return this._http.get(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
    );
  };
}
