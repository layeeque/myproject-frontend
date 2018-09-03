import { Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { ValidationService } from "./validation.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptService implements HttpInterceptor{

  constructor(public auth: ValidationService) {} 
  intercept(req: HttpRequest<any>, next: HttpHandler){
    let tokenizedReq = req.clone({
      setHeaders : {
        Authorization : `Bearer ${this.auth.getToken()}`
      }
    })
    console.log("yoyo "+JSON.stringify(tokenizedReq))
    return next.handle(tokenizedReq)
  }
}
