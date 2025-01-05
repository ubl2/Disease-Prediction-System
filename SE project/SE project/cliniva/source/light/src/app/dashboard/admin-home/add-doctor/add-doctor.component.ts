import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddDoctorComponent>,
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
      this.loginForm.controls['username'].setValue(this.data['doctor_name']);
      this.loginForm.controls['age'].setValue(this.data['age']);
      this.loginForm.controls['email'].setValue(this.data['doctor_email']);
    }
  }

// method to add doctor 

  save() {
    if (this.loginForm.invalid) {
      return;
    } else {
      let obj = {
        "doctor_name": this.loginForm.get('username').value,
        "age": this.loginForm.get('age').value,
        "phone_number": this.loginForm.get('phone').value,
        "doctor_email": this.loginForm.get('email').value,
        "doctor_password": this.loginForm.get('password').value,
        "doctor_dob": this.loginForm.get('dob').value
      }
      this.authenticationService.regDoctor(obj).subscribe(result => {
        if (result) {
          this.dialogRef.close('save');
        }
      });
    }
  }

  // method to update doctor

  update() {
    if (this.loginForm.invalid) {
      return;
    } else {
      let obj = this.data;
        obj["doctor_name"] = this.loginForm.get('username').value,
        obj["age"] = this.loginForm.get('age').value,
        obj["phone_number"] = this.loginForm.get('phone').value,
        obj["doctor_email"] = this.loginForm.get('email').value,
        obj["doctor_password"] = this.loginForm.get('password').value,
        obj["doctor_dob"] = this.loginForm.get('dob').value
      
      this.dashboardService.updateDoctor(obj).subscribe(result => {
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
