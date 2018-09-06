import { Component, OnInit,ViewChild,AfterViewInit, ViewChildren } from '@angular/core';
import {  FormserviceService } from "./formservice.service";
import { Router } from '@angular/router';
import { DashBoardtableComponent } from "../dash-boardtable/dash-boardtable.component";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[ FormserviceService, DashBoardtableComponent]

})
export class FormComponent implements OnInit  {
  // @ViewChild (DashBoardtableComponent) _D;
  newfname;
  newlname;
  newaddress;
  newstate;
  newmobile;
  myDatepicker1;
  _id;
  edited:any;
  edit:string;
  constructor(private _FormserviceService : FormserviceService, private router:Router, private dashboard: DashBoardtableComponent) {
   this.edit=localStorage.getItem("edit")
   }

ngOnInit(){

  if(localStorage.getItem("edit") == "true")
    {
    this.newfname=localStorage.getItem("fname")
    this.newlname=localStorage.getItem("lname")
    this.newaddress=localStorage.getItem("address")
    this.newstate=localStorage.getItem("state")
    this.newmobile=localStorage.getItem("mobile")
    this._id=localStorage.getItem("_id")
    }
  }

 
  editfunction()
  {
    this._FormserviceService.update(localStorage.getItem("_id"),this.newfname,this.newlname,this.newaddress.toString().slice(0, 15),this.newstate.toString().slice(0, 15),this.newmobile).subscribe(data =>{
      console.log("data is "+ data)
     
      this.router.navigate(['dashboard']);
    })
  }

}
