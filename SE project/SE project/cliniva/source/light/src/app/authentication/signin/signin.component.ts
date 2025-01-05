import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
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


// method to authenticate admin login 
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else if (this.loginForm.controls.username.value == 'admin@gmail.com' && this.loginForm.controls.password.value == 'admin@123'){
      this.router.navigate(['/dashboard/admin-home']);
    }
  }
}
