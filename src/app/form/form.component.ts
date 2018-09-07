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
 
 
  _id;
  model:any={}
  edited:any;
  edit:string;
  constructor(private _FormserviceService : FormserviceService, private router:Router, private dashboard: DashBoardtableComponent) {
   this.edit=localStorage.getItem("edit")
   }

ngOnInit(){

  if(localStorage.getItem("edit") == "true")
    {
    this.model.newfname=localStorage.getItem("fname")
    this.model.newlname=localStorage.getItem("lname")
    this.model.newaddress=localStorage.getItem("address")
    this.model.newstate=localStorage.getItem("state")
    this.model.newmobile=localStorage.getItem("mobile")
    this._id=localStorage.getItem("_id")
    }
  }

 
  editfunction()
  {
   
    this._FormserviceService.update(localStorage.getItem("_id"),this.model.newfname,this.model.newlname,this.model.newaddress.toString().slice(0, 15),this.model.newstate.toString().slice(0, 15),this.model.newmobile).subscribe(data =>{
      console.log("data is "+ data)
     
      this.router.navigate(['dashboard']);
    })
  }

}
