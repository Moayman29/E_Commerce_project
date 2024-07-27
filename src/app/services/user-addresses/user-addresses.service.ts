import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAddressesService {
  constructor(private _http: HttpClient) {}

  addAddress(data: any): Observable<any> {
    return this._http.post(
      'https://ecommerce.routemisr.com/api/v1/addresses',
      data
    );
  }

  removeAddress(id:any): Observable<any> {
    return this._http.delete(
      `https://ecommerce.routemisr.com/api/v1/addresses/${id}`
    );
  }
  
  getSpecificAddress(id:any): Observable<any> {
    return this._http.get(
      `https://ecommerce.routemisr.com/api/v1/addresses/${id}`
    );
  }

  getAllAddresses(): Observable<any> {
    return this._http.get(
      'https://ecommerce.routemisr.com/api/v1/addresses'
    );
  }
}
