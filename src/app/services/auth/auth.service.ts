import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: BehaviorSubject<any> = new BehaviorSubject(null);
  isLoggedIn = new BehaviorSubject(false);
  userName= localStorage.getItem('userName');

  constructor(private _http: HttpClient, private _router: Router) {
    this.decodeToken();
  }

  signUp(data: any): Observable<any> {
    return this._http.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      data
    );
  }

  logIn(data: any): Observable<any> {
    return this._http.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      data
    );
  }

  forgotPassword(data: any): Observable<any> {
    return this._http.post(
      'https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',
      data
    );
  }
  verifyResetCode(data: any): Observable<any> {
    return this._http.post(
      'https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',
      data
    );
  }

  resetPassword(data: any): Observable<any> {
    return this._http.put(
      'https://ecommerce.routemisr.com/api/v1/auth/resetPassword',
      data
    );
  }

  updatePassword(data: any): Observable<any> {
    return this._http.put(
      'https://ecommerce.routemisr.com/api/v1/users/changeMyPassword',
      data
    );
  }

  decodeToken() {
    const encoded = localStorage.getItem('token');
    if (encoded) {
      const decoded = jwtDecode(encoded);
      this.userData.next(decoded);
      console.log(this.userData);
      this.isLoggedIn.next(true);
    }
  }

  logOut() {
    localStorage.removeItem('token');
    this.userData.next(null);
    this.isLoggedIn.next(false);
    this._router.navigate(['/login']);
  }
}
