import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  age = new FormControl('');
  sex = new FormControl('');
  bmi = new FormControl('');
  childern = new FormControl('');
  smoker = new FormControl('');
  region = new FormControl('');

  total : any;
  class : any;

  constructor(public dashboardService: DashboardService) { }

  ngOnInit(): void {

  }

  submit() {
    if (this.age.value && this.sex.value && this.bmi.value &&  this.childern.value && this.smoker.value && this.region.value) {
      let obj =
      {
        "age":this.age.value,
        "sex":this.sex.value,
        "bmi":this.bmi.value,
        "children":this.childern.value,
        "smoker":this.smoker.value,
        "region":this.region.value
      }
      this.dashboardService.predictInsurance(obj).subscribe(result => {
        if (result) {
          this.total = result[0];
          this.class = result[1];
        }
      });
    }

  }

}
