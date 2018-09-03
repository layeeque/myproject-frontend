import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  http: Http;

  id: string;
  constructor(public _http: Http) {
    this.http = _http;


  }

  loggedIn() {
    return !!localStorage.getItem("token")
  }
  public getToken(): string {
    return localStorage.getItem('token');
  }

}



