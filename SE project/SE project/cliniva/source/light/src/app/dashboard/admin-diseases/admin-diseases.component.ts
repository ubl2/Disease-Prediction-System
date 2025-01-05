import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DashboardService } from '../dashboard.service';
import { AddDiseaseComponent } from './add-disease/add-disease.component';

@Component({
  selector: 'app-admin-diseases',
  templateUrl: './admin-diseases.component.html',
  styleUrls: ['./admin-diseases.component.sass']
})
export class AdminDiseasesComponent implements OnInit {

  data : any;

  constructor(public dialog: MatDialog,private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getDis();
  }
// method to get diseases list
  getDis(){
    this.dashboardService.getDiease({}).subscribe(result => {
      if (result) {
        this.data = result;
      }
    });
  }

  // method to delete disease

  delDis(input){
    this.dashboardService.deleteDiease(input).subscribe(result => {
      if (result) {
        this.getDis();
      }
    });
  }

  // method to call disease dialog
  
  openPatientDialog(data) {
    let dialogRef = this.dialog.open(AddDiseaseComponent, {
      data: data,
      height: "auto",
      width: "400px",
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data == 'save') {
        this.getDis();
      }
    });
  }

}
