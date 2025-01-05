import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-add-symptom',
  templateUrl: './add-symptom.component.html',
  styleUrls: ['./add-symptom.component.css']
})
export class AddSymptomComponent implements OnInit {

  symptom = new FormControl('');
  constructor(
    public dialogRef: MatDialogRef<AddSymptomComponent>,
    public dialog: MatDialog,
    private dashboardService:DashboardService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    if(this.data){
      this.symptom.setValue(this.data.symptom_name ? this.data.symptom_name : '');
    }
  }

  // method to add symptom 
  add(){
    let obj = 
      {
        "symptom_name" : this.symptom.value
    }
    this.dashboardService.addSymptom(obj).subscribe(result => {
      if (result) {
        this.dialogRef.close('save');
      }
    });
  }

  // method to update symptom  
  update(){
    
    let obj = this.data;
    obj["symptom_name"]= this.symptom.value
    this.dashboardService.updateSymptom(obj).subscribe(result => {
      if (result) {
        this.dialogRef.close('save');
      }
    });
  }

  close(): void {
    this.dialogRef.close();
  }

}
