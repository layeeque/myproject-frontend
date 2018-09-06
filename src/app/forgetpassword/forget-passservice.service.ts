import { Injectable } from '@angular/core';
import {HttpModule, Http, Response} from '@angular/http';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ForgetPassserviceService {

  constructor(private http:Http) { }
  changePassword(email: String) {
    console.log("in service ")

    // return this.http.post("http://localhost:5000/login", { "name": ename,"password": password }, {})
   return this.http.post("https://mytestapp128798.herokuapp.com/changePassword", { "email": email }, {})
   //return this.http.post("http://localhost:5000/changePassword", { "email": email }, {})

      .pipe(map(res => res.json()));
  }

}
