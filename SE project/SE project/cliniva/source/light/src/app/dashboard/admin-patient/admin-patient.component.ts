import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DashboardService } from '../dashboard.service';
import { AddPatientComponent } from './add-patient/add-patient.component';

@Component({
  selector: 'app-admin-patient',
  templateUrl: './admin-patient.component.html',
  styleUrls: ['./admin-patient.component.sass']
})
export class AdminPatientComponent implements OnInit {

  data: any;

  constructor(
    public dialog: MatDialog,
    private dashboardService: DashboardService
    ) { }

  ngOnInit(): void {
    this.getPat();
  }

  // method to get patients 
  getPat(){
    this.dashboardService.getPatient({}).subscribe(result => {
      if (result) {
        this.data = result;
      }
    });
  }

  // method to delete patients 
  delPat(input){
    this.dashboardService.deletePatient(input).subscribe(result => {
      if (result) {
        this.getPat();
      }
    });
  }

  // method to open add patient dialog  
  openPatientDialog(data) {
    let dialogRef = this.dialog.open(AddPatientComponent, {
      data: data,
      height: "auto",
      width: "400px",
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data == 'save') {
        this.getPat();
      }
    });
  }

}
