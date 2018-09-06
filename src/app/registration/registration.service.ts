import { Injectable } from '@angular/core';
import {HttpModule, Http, Response} from '@angular/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  http: Http;

  constructor(public _http: Http) {
    this.http = _http;
  }
  
  registerUser(email:string,password:string) {
    console.log("about to hit the sign api")
 
    //return this.http.post("http://localhost:5000/signUp", {"empId" :id,"name":ename,"password" : password}, {})
    return this.http.post("https://mytestapp128798.herokuapp.com/signUp", {"email":email,"password" : password}, {})

    .pipe(map(res => res.json()));

 }
}
