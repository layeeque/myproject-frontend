import { Injectable } from '@angular/core';
import {HttpModule, Http, Response} from '@angular/http';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AddformserviceService {
//https://myprjbackend.herokuapp.com
  constructor(private _http:Http) { }
  add(addfname,addlname,addaddress,addstate,addmobile){
    console.log("in service "+addaddress+ " "+addstate)
    
    return this._http.post("http://localhost:5000/add",{"fname":addfname,"lname":addlname,"address":addaddress,"state":addstate,"mobile":addmobile,"token":localStorage.getItem('token'),"email":localStorage.getItem('email')}).pipe(map(res => res.json()))
    //return this._http.post("https://mytestapp128798.herokuapp.com/add",{"fname":addfname,"lname":addlname,"address":addaddress,"state":addstate,"mobile":addmobile,"token":localStorage.getItem('token'),"email":localStorage.getItem('email')}).pipe(map(res => res.json()))
  
  }
}
