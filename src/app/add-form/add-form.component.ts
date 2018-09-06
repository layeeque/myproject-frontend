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
  newfname;
  newlname;
  newaddress;
  newstate;
  newmobile;
  constructor(private _AddformserviceService:AddformserviceService,private router:Router) { }

  ngOnInit() {
  }

  add(){
    console.log("******* "+this.newaddress,this.newstate )
    
    this._AddformserviceService.add(this.newfname,this.newlname,this.newaddress,this.newstate,this.newmobile).subscribe(data =>{
      console.log("data is "+ data)
     
      this.router.navigate(['dashboard']);
    })
  }

}
