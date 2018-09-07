import { Component, OnInit } from '@angular/core';
import { RegistrationService } from "./registration.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[RegistrationService]
})
export class RegistrationComponent implements OnInit {

  constructor(private reg : RegistrationService,private router: Router) { }
  // email:string;
  // password:string;
  model:any={}
  id:string;
  msg:string="";

  ngOnInit() {
  }
  register()
  {
    this.reg.registerUser(this.model.email,this.model.password).subscribe(
    
      (res) => { 
        this.msg=res.message;
        console.log(res)
        //this.router.navigate(['/dashboard'])
       }
       
    );
  }

}
