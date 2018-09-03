import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { ValidationService } from "./services/validation.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private validService : ValidationService,private _router:Router){}
  canActivate() : boolean
 {
    if( this.validService.loggedIn())
    {
      return true;
    }
    else{
        this._router.navigate(['/login'])
        return false;
    }
}
}
