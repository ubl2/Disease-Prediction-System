import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { ChartsModule as chartjsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { MorrisJsModule } from 'angular-morris-js';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FeedbackComponent } from './feedback/feedback.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { MatRadioModule } from '@angular/material/radio';
import { CalenderComponent } from './main/calender/calender.component';
import { DocHomeComponent } from './doc-home/doc-home.component';
import { AddAppointmentComponent } from './doc-home/add-appointment/add-appointment.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminFeedbackComponent } from './admin-feedback/admin-feedback.component';
import { AdminSymptomsComponent } from './admin-symptoms/admin-symptoms.component';
import { AdminDiseasesComponent } from './admin-diseases/admin-diseases.component';
import { AddDoctorComponent } from './admin-home/add-doctor/add-doctor.component';
import { AddSymptomComponent } from './admin-symptoms/add-symptom/add-symptom.component';
import { AddFeedbackComponent } from './admin-feedback/add-feedback/add-feedback.component';
import { AddDiseaseComponent } from './admin-diseases/add-disease/add-disease.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPatientComponent } from './admin-patient/admin-patient.component';
import { AddPatientComponent } from './admin-patient/add-patient/add-patient.component';
@NgModule({
  declarations: [
    MainComponent,
    Dashboard2Component,
    FeedbackComponent,
    InsuranceComponent,
    CalenderComponent,
    DocHomeComponent,
    AddAppointmentComponent,
    AdminHomeComponent,
    AdminFeedbackComponent,
    AdminSymptomsComponent,
    AdminDiseasesComponent,
    AddDoctorComponent,
    AddSymptomComponent,
    AddFeedbackComponent,
    AddDiseaseComponent,
    AdminPatientComponent,
    AddPatientComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DashboardRoutingModule,
    chartjsModule,
    NgxEchartsModule,
    MorrisJsModule,
    PerfectScrollbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
  ],
  entryComponents: [
    CalenderComponent,
    AddAppointmentComponent,
    AddDoctorComponent,
    AddSymptomComponent,
    AddFeedbackComponent,
    AddDiseaseComponent,
    AddPatientComponent
  ]
})
export class DashboardModule { }
