import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from "./routes";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ValidationService } from "./services/validation.service";
import { AuthGuard } from "./auth.guard";
import { RegistrationComponent } from './registration/registration.component';
import { DashBoardtableComponent } from './dash-boardtable/dash-boardtable.component';
import { FormComponent } from './form/form.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AngularWebStorageModule } from 'angular-web-storage';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angular-6-social-login";
import { AddFormComponent } from './add-form/add-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.Module";

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';




export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
    	
       //provider: new GoogleLoginProvider("1092754136909-250693fpthv3bfdi9kot0mmln664icud.apps.googleusercontent.com")
      provider: new GoogleLoginProvider("678776380629-23ps0ti9i6ufr3gtcdq8981kgh4jn49q.apps.googleusercontent.com")
    }                                      	
  ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistrationComponent,
    DashBoardtableComponent,
    FormComponent,
    AddFormComponent,
    SidenavComponent,
    
  
   
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpModule,
    FormsModule,
    NgxSpinnerModule,
    SocialLoginModule,
    AngularWebStorageModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule

  ],
  providers: [ValidationService, AuthGuard, {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }
    // , {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

