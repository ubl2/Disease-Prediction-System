import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {

  question = new FormControl('');
  constructor(
    public dialogRef: MatDialogRef<AddFeedbackComponent>,
    public dialog: MatDialog,
    private dashboardService:DashboardService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    if(this.data){
      this.question.setValue(this.data.question_name ? this.data.question_name : '');
    }
  }

  add(){
    let obj = 
      {
        "question_name" : this.question.value
    }
    this.dashboardService.addQuestion(obj).subscribe(result => {
      if (result) {
        this.dialogRef.close('save');
      }
    });
  }

  update(){
    
    let obj = this.data;
    obj["question_name"]= this.question.value
    this.dashboardService.updateQuestion(obj).subscribe(result => {
      if (result) {
        this.dialogRef.close('save');
      }
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
