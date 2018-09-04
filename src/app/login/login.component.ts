import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ValidationService } from "../services/validation.service";
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login';

import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit{
  tem: Object = {}
  ename: string;
  password: string;
  returnUrl: string;
  sub: any;
  message:string


  constructor(private _loginService: LoginService, private router: Router, public afservice: ValidationService, public socialAuthService: AuthService,public session: SessionStorageService) {
          
  }

ngOnInit(){
  console.log('in login')
    localStorage.removeItem("token")
              localStorage.removeItem("name")
              localStorage.removeItem("photo")
}

  signIn() {

    var result = this._loginService.validateUser(this.ename, this.password).subscribe(
      result => {
        if (result.success == 1) {
          console.log("the returned value is "+JSON.stringify(result))
          localStorage.setItem("name",result.data[0].name)

          localStorage.setItem("token", result.token)
          this.session.set("socialLogin",false)
          this.router.navigateByUrl('/dashboard');
        }
        else {
          this.message= "Invalid User"
          this.router.navigate(['']);
        }
      },
    )
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        // Now sign-in with userData
        // ...
        console.log("userData.name " + userData.name)
        var result = this._loginService.validateUserSocial(userData.name).subscribe(
          result => {
            if (result) {

              localStorage.setItem("token", result.token)
              localStorage.setItem("name",userData.name)
              localStorage.setItem("photo", userData.image)
             
              this.router.navigate(['dashboard']);          
              this.session.set("socialLogin",true)
            }
            else {
              this.router.navigate(['']);
            }
          },
        )

      }
    );
  }
  logout() {
    
    if(this.session.get("socialLogin") == true)
   {
    this.socialAuthService.signOut()
   } 
    localStorage.removeItem("token")
    this.router.navigate(['']);
  }

}

