import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-add-disease',
  templateUrl: './add-disease.component.html',
  styleUrls: ['./add-disease.component.sass']
})
export class AddDiseaseComponent implements OnInit {
  symtoms : any;

  diseasename = new FormControl('');
  symtom = new FormControl('');
  precaution = new FormControl('');

  constructor(
    public dialogRef: MatDialogRef<AddDiseaseComponent>,
    public dialog: MatDialog,
    private dashboardService:DashboardService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.dashboardService.getSymptom({}).subscribe(result => {
      if (result) {
        this.symtoms = result;
      }
    });
    if(this.data){
      this.diseasename.setValue(this.data.disease_name ? this.data.disease_name : '');
      this.symtom.setValue(this.data.symp ? this.data.symp : '');
      this.precaution.setValue(this.data.precautions ? this.data.precautions : '');
    }
  }

  add(){
    let obj = 
      {
        "disease_name" : this.diseasename.value,
        "symp" :this.symtom.value,
        "probability" : 1,
        "precautions": this.precaution.value
    }
    this.dashboardService.addDiease(obj).subscribe(result => {
      if (result) {
        this.dialogRef.close('save');
      }
    });
  }

  update(){
    
    let obj = this.data;
    obj["disease_name"]= this.diseasename.value;
    obj["symp"]= this.symtom.value;
    obj["precautions"]= this.precaution.value;

    this.dashboardService.updateDiease(obj).subscribe(result => {
      if (result) {
        this.dialogRef.close('save');
      }
    });
  }

  close(): void {
    this.dialogRef.close();
  }

}
