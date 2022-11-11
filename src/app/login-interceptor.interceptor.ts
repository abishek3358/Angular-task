import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginserviceService } from './loginservice.service';

@Injectable()
export class LoginInterceptorInterceptor implements HttpInterceptor {

  constructor(
    private route:Router,
    private service:LoginserviceService
  ) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.service.getToken();
    if(token){
    request = request.clone({
      setHeaders: {
        'Authorization':`BslogiKey ${token}`
      }
    })
    console.log(request.method);
  }
    return next.handle(request);
  }
}
