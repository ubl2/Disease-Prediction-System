import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  chide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService :  AuthenticationService
  ) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      age: ['', Validators.required],
      dob: ['', Validators.required],
      phone: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],

      password: ['', Validators.required],
      userType: ['']
    });
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      if(this.loginForm.get('userType').value == 1){
        let obj = {
          "doctor_name": this.loginForm.get('username').value,
          "age":this.loginForm.get('age').value,
          "phone_number":this.loginForm.get('phone').value,
          "doctor_email":this.loginForm.get('email').value,
          "doctor_password":this.loginForm.get('password').value,
          "doctor_dob":this.loginForm.get('dob').value
        }
  
        this.authenticationService.regDoctor(obj).subscribe(result => {
          if (result) {
            this.router.navigate(['authentication/login']);
          }
        });
      }else if (this.loginForm.get('userType').value == 2){
        let obj = {
          "patient_name": this.loginForm.get('username').value,
          "age":this.loginForm.get('age').value,
          "phone_number":this.loginForm.get('phone').value,
          "patient_email":this.loginForm.get('email').value,
          "patient_password":this.loginForm.get('password').value,
          "patient_dob":this.loginForm.get('dob').value
        }
  
        this.authenticationService.regPatient(obj).subscribe(result => {
          if (result) {
            this.router.navigate(['authentication/login']);
          }
        });
      }
      

    }
  }
}
