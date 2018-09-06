import { Component, OnInit } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { Router } from '@angular/router';
import { fadeAnimation } from '../animation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [LoginComponent],
  animations: [fadeAnimation] 

})


export class DashboardComponent implements OnInit {
image:any;
email:any;
dashboard;


  ngOnInit() {
    console.log('in');
    this.image=localStorage.getItem("photo");
    this.email=localStorage.getItem("email");
    // this.router.events.subscribe((val:any) => {
    //   if(val.url === "/dashboard"){ console.log("I am in dashboard");this.dashboard=false}
    //   if(val.url === "/dashboard/addNewItem"){ console.log("I am in add");this.dashboard=true}
    //   if(val.url === "/dashboard/editItem"){ console.log("I am in edit");this.dashboard=true}
    //  })
  
 
  }
  constructor(public _LoginComponent:LoginComponent,private router:Router) {
 
   }
   
   logout(){
    this._LoginComponent.logout()
  }

}
