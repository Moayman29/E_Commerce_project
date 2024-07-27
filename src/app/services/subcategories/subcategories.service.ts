import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriesService {

  constructor(private _http:HttpClient) {}

  getAllSubcategories(id:any):Observable<any>{
   return this._http.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`);
  }
}
