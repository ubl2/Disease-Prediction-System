import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DashboardService } from '../dashboard.service';
import { CalenderComponent } from './calender/calender.component';
declare const $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  prediction = [];

  data = [];

  doctors = [];

  symtom1 = new FormControl('');
  symtom2 = new FormControl('');
  symtom3 = new FormControl('');

  constructor(
    public dialog: MatDialog,
    public dashboardService: DashboardService
  ) { }

  logintype = 1;


  submit() {
    if (this.symtom1.value && this.symtom2.value && this.symtom3.value) {
      let obj =
      {
        "Symptom1": this.symtom1.value,
        "Symptom2": this.symtom1.value,
        "Symptom3": this.symtom1.value
      }
      this.dashboardService.predictDisease(obj).subscribe(result => {
        if (result) {
          let array = []
          for(let i=0;i < result.length;i++){
            this.dashboardService.precautions({'disease_name':result[i][0]}).subscribe(result2 => {
              let obj = {};
              obj['diease']=result[i][0];
              obj['value']=result[i][1];
              obj['precaution'] = result2.precs.length ? result2.precs[0].precautions : '';
              let random = Math.floor(Math.random() * ((this.doctors.length-1) - 0 + 1)) + 0;
              obj['doc_id'] = this.doctors[random].doctor_id;
              obj['doc_name'] = this.doctors[random].doctor_name;
              array.push(obj)
            })
          }
          console.log(array);

          this.prediction = array;
          this.logintype = 2;
        }
      });
    }

  }



  back() {
    this.logintype = 1;
  }
  ngOnInit() {
    this.getSym();
    this.getDoc();
  }

  getSym(){
    this.dashboardService.getSymptom({}).subscribe(result => {
      if (result) {
        this.data = result;
      }
    });
  }

  getDoc(){
    this.dashboardService.getDoctor({}).subscribe(result => {
      if (result) {
        this.doctors = result;
      }
    });
  }

  openCalenderDialog(data) {
    let dialogRef = this.dialog.open(CalenderComponent, {
      data: data,
      height: "auto",
      width: "400px",
      position: {
        top: '50px',
      },
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data == 'save') {

      }
    });
  }

   sem = [
    'Itching',
    'Skin Rash',
    'Continuous Sneezing'
  ]

  symtoms = ['Itching',
    'Skin Rash',
    'Nodal Skin Eruptions',
    'Continuous Sneezing',
    'Shivering',
    'Chills',
    'Joint Pain',
    'Stomach Pain',
    'Acidity',
    'Ulcers On Tongue',
    'Muscle Wasting',
    'Vomiting',
    'Burning Micturition',
    'Spotting  urination',
    'Fatigue',
    'Weight Gain',
    'Anxiety',
    'Cold Hands And Feets',
    'Mood Swings',
    'Weight Loss',
    'Restlessness',
    'Lethargy',
    'Patches In Throat',
    'Irregular Sugar Level',
    'Cough',
    'High Fever',
    'Sunken Eyes',
    'Breathlessness',
    'Sweating',
    'Dehydration',
    'Indigestion',
    'Headache',
    'Yellowish Skin',
    'Dark Urine',
    'Nausea',
    'Loss Of Appetite',
    'Pain Behind The Eyes',
    'Back Pain',
    'Constipation',
    'Abdominal Pain',
    'Diarrhoea',
    'Mild Fever',
    'Yellow Urine',
    'Yellowing Of Eyes',
    'Acute Liver Failure',
    'Fluid Overload',
    'Swelling Of Stomach',
    'Swelled Lymph Nodes',
    'Malaise',
    'Blurred And Distorted Vision',
    'Phlegm',
    'Throat Irritation',
    'Redness Of Eyes',
    'Sinus Pressure',
    'Runny Nose',
    'Congestion',
    'Chest Pain',
    'Weakness In Limbs',
    'Fast Heart Rate',
    'Pain During Bowel Movements',
    'Pain In Anal Region',
    'Bloody Stool',
    'Irritation In Anus',
    'Neck Pain',
    'Dizziness',
    'Cramps',
    'Bruising',
    'Obesity',
    'Swollen Legs',
    'Swollen Blood Vessels',
    'Puffy Face And Eyes',
    'Enlarged Thyroid',
    'Brittle Nails',
    'Swollen Extremeties',
    'Excessive Hunger',
    'Extra Marital Contacts',
    'Drying And Tingling Lips',
    'Slurred Speech',
    'Knee Pain',
    'Hip Joint Pain',
    'Muscle Weakness',
    'Stiff Neck',
    'Swelling Joints',
    'Movement Stiffness',
    'Spinning Movements',
    'Loss Of Balance',
    'Unsteadiness',
    'Weakness Of One Body Side',
    'Loss Of Smell',
    'Bladder Discomfort',
    'Foul Smell Of urine',
    'Continuous Feel Of Urine',
    'Passage Of Gases',
    'Internal Itching',
    'Toxic Look (typhos)',
    'Depression',
    'Irritability',
    'Muscle Pain',
    'Altered Sensorium',
    'Red Spots Over Body',
    'Belly Pain',
    'Abnormal Menstruation',
    'Dischromic  Patches',
    'Watering From Eyes',
    'Increased Appetite',
    'Polyuria',
    'Family History',
    'Mucoid Sputum',
    'Rusty Sputum',
    'Lack Of Concentration',
    'Visual Disturbances',
    'Receiving Blood Transfusion',
    'Receiving Unsterile Injections',
    'Coma',
    'Stomach Bleeding',
    'Distention Of Abdomen',
    'History Of Alcohol Consumption',
    'Fluid Overload.1',
    'Blood In Sputum',
    'Prominent Veins On Calf',
    'Palpitations',
    'Painful Walking',
    'Pus Filled Pimples',
    'Blackheads',
    'Scurring',
    'Skin Peeling',
    'Silver Like Dusting',
    'Small Dents In Nails',
    'Inflammatory Nails',
    'Blister',
    'Red Sore Around Nose',
    'Yellow Crust Ooze']
}
