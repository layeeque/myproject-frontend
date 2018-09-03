import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from "./registration/registration.component";
import { FormComponent } from "./form/form.component";
import { DashBoardtableComponent } from "./dash-boardtable/dash-boardtable.component";
import { AddFormComponent } from "./add-form/add-form.component";

import { AuthGuard } from "./auth.guard";


const routes = [
    { path: '', redirectTo: "/login", pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
        ,
        children: [{
            path: '',
            component: DashBoardtableComponent
        }, {
            path: 'addNewItem',
            component: AddFormComponent
        },
        {
            path: 'editItem',
            component: FormComponent
        }]
    },
    { path: '**', component: LoginComponent }

]

@NgModule({

    imports: [
        RouterModule.forRoot(routes),
    ], exports: [
        RouterModule
    ]
})
export class Routing { }