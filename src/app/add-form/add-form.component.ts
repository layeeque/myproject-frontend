import { Component, OnInit } from '@angular/core';
import { AddformserviceService } from "./addformservice.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
  providers:[AddformserviceService]
})
export class AddFormComponent implements OnInit {
  newfname:String;
  newlname:String;
  newaddress:string;
  newstate:string;
  newmobile:String;
  constructor(private _AddformserviceService:AddformserviceService,private router:Router) { }

  ngOnInit() {
  }

  add(){
    
    
    this._AddformserviceService.add(this.newfname,this.newlname,this.newaddress.toString().slice(0, 15),this.newstate.toString().slice(0, 15),this.newmobile).subscribe(data =>{
      console.log("data is "+ data)
    
      this.router.navigate(['dashboard']);
    })
  }

}
