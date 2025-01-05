import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-doc-login',
  templateUrl: './doc-login.component.html',
  styleUrls: ['./doc-login.component.sass']
})
export class DocLoginComponent implements OnInit {

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

  // method  to authenticate login
  
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      localStorage.setItem("userType",'doc');

      let obj = {
        "email":this.loginForm.get('username').value,
        "password":this.loginForm.get('password').value
      }
      
      this.authenticationService.docLogin(obj).subscribe(result => {
        if (result != "Failed to Update.") {
          for (let i =0;i<result.length;i++){
            if(result[i].doctor_email == this.loginForm.get('username').value){
              localStorage.setItem("doctor_id",result[i].doctor_id);
              localStorage.setItem("doctor_name",result[i].doctor_name);
              
            }
          }
          this.router.navigate(['/dashboard/doc-home']);
        }
      });
    }
  }

}
