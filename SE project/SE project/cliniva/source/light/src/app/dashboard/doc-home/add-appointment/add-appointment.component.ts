import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  patient:any;

  appointmentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddAppointmentComponent>,
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
      patient: ['', Validators.required],
      date: ['', Validators.required],
    });

    if(this.data){
      this.appointmentForm.controls['patient'].setValue(this.data['patient']);
      this.appointmentForm.controls['date'].setValue(this.data['Appionment_date']);
    }

  }

  close(): void {
    this.dialogRef.close();
  }

  save() {
    let id = this.appointmentForm.get('patient').value;
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
        "doctor":localStorage.getItem("doctor_id"),
        "patient":this.appointmentForm.get('patient').value
      }
      this.dashboardService.addAppionment(obj).subscribe(result => {
        if (result) {
          this.dialogRef.close('save');
        }
      });
    }
  }

  update() {
    if (this.appointmentForm.invalid) {
      return;
    } else {
      let id = this.appointmentForm.get('patient').value;
      let patient_name = ''
      for (let i =0; i<this.patient.length;i++){
        if(this.patient[i].patient_id == id){
          patient_name = this.patient[i].patient_name;
        }
      }
      let obj = this.data;
        obj["patient_name"] = patient_name,
        obj["doctor_firstname"] = "Doc",
        obj["Appionment_date"] = this.appointmentForm.get('date').value,
        obj["doctor"] = localStorage.getItem("doctor_id"),
        obj["patient"] = this.appointmentForm.get('patient').value
      
      this.dashboardService.updateAppionment(obj).subscribe(result => {
        if (result) {
          this.dialogRef.close('save');
        }
      });
    }
  }




}
