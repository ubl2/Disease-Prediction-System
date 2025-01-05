import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DashboardService } from '../dashboard.service';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';

@Component({
  selector: 'app-doc-home',
  templateUrl: './doc-home.component.html',
  styleUrls: ['./doc-home.component.sass']
})
export class DocHomeComponent implements OnInit {

  data= [];

  constructor(
    public dialog: MatDialog,
    private dashboardService: DashboardService
    ) { }

  ngOnInit(): void {
    this.getApp();
  }

  getApp(){
    this.dashboardService.getAppionment({}).subscribe(result => {
      if (result) {
        this.data = [];
        for(let i = 0; i < result.length ;i++){
          if(result[i].doctor == localStorage.getItem("doctor_id")){
            this.data.push(result[i]);
          }
        }
      }
    });
  }

  delApp(input){
    this.dashboardService.deleteAppionment(input).subscribe(result => {
      if (result) {
        this.getApp();
      }
    });
  }

  openPatientDialog(data) {
    let dialogRef = this.dialog.open(AddAppointmentComponent, {
      data: data,
      height: "auto",
      width: "400px",
      autoFocus: false,
      position: {
        top: '30px',
      }
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data == 'save') {
        this.getApp();
      }
    });
  }

}
