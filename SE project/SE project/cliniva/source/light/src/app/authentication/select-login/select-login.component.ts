import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-login',
  templateUrl: './select-login.component.html',
  styleUrls: ['./select-login.component.sass']
})
export class SelectLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // navigation for admin login
  adminLog(){
    this.router.navigate(['/authentication/admin-login']);
  }
  // navigation for doctor login
  docLog(){
    this.router.navigate(['/authentication/doctor-login']);
  }
  // navigation for patient login
  patLog(){
    this.router.navigate(['/authentication/patient-login']);
  }
}
