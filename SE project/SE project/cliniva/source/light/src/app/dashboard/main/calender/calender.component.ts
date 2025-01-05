import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  patient:any;

  appointmentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CalenderComponent>,
    public dialog: MatDialog,
    private dashboardService: DashboardService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.dashboardService.getPatient({}).subscribe(result => {
      if (result) {
        this.patient = result;
      }
    });

    this.appointmentForm = this.formBuilder.group({
      date: ['', Validators.required],
    });

  }

  close(): void {
    this.dialogRef.close();
  }

  save() {
    let id = localStorage.getItem("patient_id");
    let patient_name = ''
    for (let i =0; i<this.patient.length;i++){
      if(this.patient[i].patient_id == id){
        patient_name = this.patient[i].patient_name;
      }
      
    }
    if (this.appointmentForm.invalid) {
      return;
    } else {
      let obj = {
        "patient_name":patient_name,
        "doctor_firstname":"DOC",
        "Appionment_date":this.appointmentForm.get('date').value,
        "doctor":this.data,
        "patient":localStorage.getItem("patient_id")
      }
      this.dashboardService.addAppionment(obj).subscribe(result => {
        if (result) {
          this.dialogRef.close('save');
        }
      });
    }
  }

  
}
