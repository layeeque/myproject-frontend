import { Component, OnInit } from '@angular/core';
import { DashBoardtableService } from "./dash-boardtable.service";
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';




@Component({
  selector: 'app-dash-boardtable',
  templateUrl: './dash-boardtable.component.html',
  styleUrls: ['./dash-boardtable.component.css'],
  providers: [DashBoardtableService]
})

export class DashBoardtableComponent implements OnInit {
  data: any;
  _editedData: any="hey";
  _edit: boolean = false;
  dashboard:boolean=true;

  constructor(private dashboardService: DashBoardtableService, private router: Router,private spinner: NgxSpinnerService) {
 
  }
  ngOnInit()
{ 
  localStorage.setItem("edit","false")
  this.dashboardService.loadData().subscribe(data => {
    this.data = data;
 
  })

}
  edit(id) {

    this.dashboardService.edit(id).subscribe(data1 => {
      console.log("from bkend "+JSON.stringify(data1))
      this._editedData = data1;
      this._edit = true;
      localStorage.setItem("edit","true")
      localStorage.setItem("_id",data1._id)
      localStorage.setItem("fname",data1.fname)
      localStorage.setItem("lname",data1.lname)
      localStorage.setItem("address",data1.address)
      localStorage.setItem("state",data1.state)
      localStorage.setItem("mobile",data1.mobile)
    
      this.router.navigateByUrl('dashboard/editItem');
    })

  }

  delete(_id)
  {
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 3000);
    this.dashboardService.deleteData(_id).subscribe(data =>{
     
      window.location.reload();
      
    })
  }

 




}
