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
// import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
// import { TokenInterceptService } from './services/token-intercept.service';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      
      // provider: new GoogleLoginProvider("1092754136909-250693fpthv3bfdi9kot0mmln664icud.apps.googleusercontent.com")
      provider: new GoogleLoginProvider("719240973538-i2kqdok4jkaos0kqmf5ms6rvr60s9gen.apps.googleusercontent.com")
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
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpModule,
    FormsModule,
    NgxSpinnerModule,
    SocialLoginModule,
    AngularWebStorageModule,
    BrowserAnimationsModule
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

