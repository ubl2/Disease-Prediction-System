import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.sass']
})
export class AddPatientComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddPatientComponent>,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private dashboardService : DashboardService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      age: ['', Validators.required],
      dob: ['1996-09-10', Validators.required],
      phone: ['1234456778', Validators.required],
      email: ['',[Validators.required, Validators.email, Validators.minLength(5)]],
      password: ['password', Validators.required]
    });

    if(this.data){
      this.loginForm.controls['username'].setValue(this.data['patient_name']);
      this.loginForm.controls['age'].setValue(this.data['age']);
      this.loginForm.controls['email'].setValue(this.data['patient_email']);
    }
  }
  // method to add patient 

  save() {
    if (this.loginForm.invalid) {
      return;
    } else {
      let obj = {
        "patient_name": this.loginForm.get('username').value,
        "age": this.loginForm.get('age').value,
        "phone_number": this.loginForm.get('phone').value,
        "patient_email": this.loginForm.get('email').value,
        "patient_password": this.loginForm.get('password').value,
        "patient_dob": this.loginForm.get('dob').value
      }
      this.authenticationService.regPatient(obj).subscribe(result => {
        if (result) {
          this.dialogRef.close('save');
        }
      });
    }
  }

  // method to update patient 
  update() {
    if (this.loginForm.invalid) {
      return;
    } else {
      let obj = this.data;
        obj["patient_name"] = this.loginForm.get('username').value,
        obj["age"] = this.loginForm.get('age').value,
        obj["phone_number"] = this.loginForm.get('phone').value,
        obj["patient_email"] = this.loginForm.get('email').value,
        obj["patient_password"] = this.loginForm.get('password').value,
        obj["patient_dob"] = this.loginForm.get('dob').value
      
      this.dashboardService.updatePatient(obj).subscribe(result => {
        if (result) {
          this.dialogRef.close('save');
        }
      });
    }
  }


  close(): void {
    this.dialogRef.close();
  }

}
