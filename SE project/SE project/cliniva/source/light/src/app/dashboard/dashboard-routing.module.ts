import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { DocHomeComponent } from './doc-home/doc-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDiseasesComponent } from './admin-diseases/admin-diseases.component';
import { AdminFeedbackComponent } from './admin-feedback/admin-feedback.component';
import { AdminSymptomsComponent } from './admin-symptoms/admin-symptoms.component';
import { AdminPatientComponent } from './admin-patient/admin-patient.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent
  },
  
  {
    path: 'pat-feedback',
    component: FeedbackComponent
  },
  {
    path: 'doc-feedback',
    component: FeedbackComponent
  },
  {
    path: 'insurance',
    component: InsuranceComponent
  },
  {
    path: 'doc-home',
    component: DocHomeComponent
  },
  {
    path: 'admin-home',
    component: AdminHomeComponent
  },
  {
    path: 'admin-patient',
    component: AdminPatientComponent
  },
  {
    path: 'admin-feedback',
    component: AdminFeedbackComponent
  },
  {
    path: 'admin-symptoms',
    component: AdminSymptomsComponent
  },
  {
    path: 'admin-diseases',
    component: AdminDiseasesComponent
  },
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
