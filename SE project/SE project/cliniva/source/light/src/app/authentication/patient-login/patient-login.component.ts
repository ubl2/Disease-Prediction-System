import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.sass']
})
export class PatientLoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  // mehtod to authenticate patient login
  
  async onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      await localStorage.setItem("userType",'patient');
        let obj = {
          "email":this.loginForm.get('username').value,
          "password":this.loginForm.get('password').value
        }
        
        this.authenticationService.patLogin(obj).subscribe(result => {
          if (result != "Failed to Update.") {
            for (let i =0;i<result.length;i++){
              if(result[i].patient_email == this.loginForm.get('username').value){
                localStorage.setItem("patient_id",result[i].patient_id);
                localStorage.setItem("pat_name",result[i].patient_name);
              }
            }
            this.router.navigate(['/dashboard/main']);
          }
        });
    }
  }

}
