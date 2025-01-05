import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  data: any;
  question1 = new FormControl('');
  question2 = new FormControl('');
  question3 = new FormControl('');
  question4 = new FormControl('');

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getQuestion({}).subscribe(result => {
      if (result) {
        this.data = result;
      }
    });
  }

  subject(){
    let array = [
      {
        "question":this.data[0].question_id,
        "rating": this.question1.value
      },
      {
        "question":this.data[1].question_id,
        "rating": this.question2.value
      },
      {
        "question":this.data[2].question_id,
        "rating": this.question3.value
      },
      {
        "question":this.data[3].question_id,
        "rating": this.question4.value
      }
    ]

    console.log(array);
    for(let i = 0; i < array.length; i++){
      this.dashboardService.addFeedback(array[i]).subscribe(result => {
        if (result) {
          
        }
      });
    }

  }

}
