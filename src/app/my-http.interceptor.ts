import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

  // header: any = {
  //   token: localStorage.getItem('token'),
  // };

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let header=localStorage.getItem('token') 

    if(header!= undefined){

      request.headers.append(
        'token', header
        // setHeaders: this.header
      )
    }

    return next.handle(request);
  }
}
