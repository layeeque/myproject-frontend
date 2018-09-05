import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
image
name
  constructor() {
    this.image=localStorage.getItem("photo");
    this.name=localStorage.getItem("name");
   }

  ngOnInit() {
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("tableContent").style.opacity='0.3';
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.body.style.backgroundColor = "white";
    document.getElementById("tableContent").style.opacity='1';
  }
}
