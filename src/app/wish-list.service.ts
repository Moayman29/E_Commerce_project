import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  wishNumber:BehaviorSubject<number>= new BehaviorSubject(0);

  constructor(private _http: HttpClient) {}

  addToWishList(id: any): Observable<any> {
    return this._http.post(
      'https://ecommerce.routemisr.com/api/v1/wishlist',
      { productId: id },
    );
  };

  removeFromWishList(id: any): Observable<any> {
    return this._http.delete(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`);
  };

  getWishList(): Observable<any>{
    return this._http.get('https://ecommerce.routemisr.com/api/v1/wishlist/');
  };
}
