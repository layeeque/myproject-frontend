import { Injectable } from '@angular/core';
import {HttpModule, Http, Response} from '@angular/http';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class FormserviceService {
  constructor( private _http:Http) { }

 //https://myprjbackend.herokuapp.com
  update(_id,addfname,addlname,addaddress,addstate,addmobile){
    
    //return this._http.post("http://localhost:5000/update",{"_id":_id,"fname":addfname,"lname":addlname,"address":addaddress,"state":addstate,"mobile":addmobile,"token":localStorage.getItem('token'),"email":localStorage.getItem('email')}).pipe(map(res => res.json()))
    return this._http.post("https://mytestapp128798.herokuapp.com/update",{"_id":_id,"fname":addfname,"lname":addlname,"address":addaddress,"state":addstate,"mobile":addmobile,"token":localStorage.getItem('token'),"email":localStorage.getItem('email')}).pipe(map(res => res.json()))
  
  }
  
}
