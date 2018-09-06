import { Component, OnInit } from '@angular/core';
import { ForgetPassserviceService } from "../forgetpassword/forget-passservice.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css'],
  providers:[ForgetPassserviceService]

})
export class ForgetpasswordComponent implements OnInit {
 message:String="Forget Password"
 email:String;
  constructor(private _ForgetPassserviceService:ForgetPassserviceService,private router:Router) { }

  ngOnInit() {
  }

  changePassword(){
    console.log("in component ")
    this._ForgetPassserviceService.changePassword(this.email).subscribe(
    
      (res) => { 
       
        if(res.success == '1')
        {
          this.message=res.message
        
        }
       
       else{
         this.message=res.message
       }
       }
       
    );

  }
}
