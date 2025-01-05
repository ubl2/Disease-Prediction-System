import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DashboardService } from '../dashboard.service';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';

@Component({
  selector: 'app-admin-feedback',
  templateUrl: './admin-feedback.component.html',
  styleUrls: ['./admin-feedback.component.sass']
})
export class AdminFeedbackComponent implements OnInit {

  data : any;

  constructor(public dialog: MatDialog,private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getQues();
  }

  // method to get questions
  getQues(){
    this.dashboardService.getQuestion({}).subscribe(result => {
      if (result) {
        this.data = result;
      }
    });
  }

  // method to delete questions
  delQues(input){
    this.dashboardService.deleteQuestion(input).subscribe(result => {
      if (result) {
        this.getQues();
      }
    });
  }

// method to call add feedback component 
  openPatientDialog(data) {
    let dialogRef = this.dialog.open(AddFeedbackComponent, {
      data: data,
      height: "auto",
      width: "800px",
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data == 'save') {
        this.getQues();
      }
    });
  }

}
