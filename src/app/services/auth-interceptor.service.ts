import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      console.log('Token desde auth interceptpor: '+token);
          return next.handle(req);
        }
    const headers = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        console.log('headers desde auth interceptor: '+headers);
    return next.handle(headers);
  }
}
