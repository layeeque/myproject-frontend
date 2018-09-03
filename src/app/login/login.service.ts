import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http: Http;


  constructor(public _http: Http) {
    this.http = _http;
  }
  //https://myprjbackend.herokuapp.com
  validateUser(ename: string, password: string) {

    // return this.http.post("http://localhost:5000/login", { "name": ename,"password": password }, {})
    return this.http.post("https://myprjbackend.herokuapp.com/login", { "name": ename,"password": password }, {})

      .pipe(map(res => res.json()));
  }

  loggedIn() {
    return !!localStorage.getItem("token")
  }

  validateUserSocial(ename: string) {
    // return this.http.post("http://localhost:5000/social", { "name": ename }, {})
    return this.http.post("https://myprjbackend.herokuapp.com/social", { "name": ename }, {})

      .pipe(map(res => res.json()));
  }

}



