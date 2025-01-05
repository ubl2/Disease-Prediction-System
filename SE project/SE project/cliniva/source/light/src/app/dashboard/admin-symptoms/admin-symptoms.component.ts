import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DashboardService } from '../dashboard.service';
import { AddSymptomComponent } from './add-symptom/add-symptom.component';

@Component({
  selector: 'app-admin-symptoms',
  templateUrl: './admin-symptoms.component.html',
  styleUrls: ['./admin-symptoms.component.sass']
})
export class AdminSymptomsComponent implements OnInit {

  data : any;

  constructor(public dialog: MatDialog,private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getSym();
  }

  getSym(){
    this.dashboardService.getSymptom({}).subscribe(result => {
      if (result) {
        this.data = result;
      }
    });
  }

  delSym(input){
    this.dashboardService.deleteSymptom(input).subscribe(result => {
      if (result) {
        this.getSym();
      }
    });
  }

  openPatientDialog(data) {
    let dialogRef = this.dialog.open(AddSymptomComponent, {
      data: data,
      height: "auto",
      width: "400px",
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data == 'save') {
        this.getSym();
      }
    });
  }

}
