import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DashboardService } from '../dashboard.service';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.sass']
})
export class AdminHomeComponent implements OnInit {

  data : any;

  constructor(
    public dialog: MatDialog,
    private dashboardService : DashboardService
    ) { }

  ngOnInit(): void {
    this.getDoc();
  }

  // method to get doctors
  getDoc(){
    this.dashboardService.getDoctor({}).subscribe(result => {
      if (result) {
        this.data = result;
      }
    });
  }

  // method to delete doctor 
  delDoc(input){
    this.dashboardService.deleteDoctor(input).subscribe(result => {
      if (result) {
        this.getDoc();
      }
    });
  }

  // method to open add doctor dialog
  openPatientDialog(data) {
    let dialogRef = this.dialog.open(AddDoctorComponent, {
      data: data,
      height: "auto",
      width: "400px",
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data == 'save') {
        this.getDoc();
      }
    });
  }

}
