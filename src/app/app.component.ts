import { Component } from '@angular/core';
import { ValidationService } from "./services/validation.service";
import { fadeAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation] 
})
export class AppComponent {
  title = 'World ';
  constructor(private afservice:ValidationService){}
}
