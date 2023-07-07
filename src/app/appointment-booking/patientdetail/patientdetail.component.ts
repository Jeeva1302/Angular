import { Component } from '@angular/core';
import { Ipatient } from 'src/app/Models/patient';
import { PatientformService } from 'src/app/Services/patientform.service';

@Component({
  selector: 'app-patientdetail',
  templateUrl: './patientdetail.component.html',
  styleUrls: ['./patientdetail.component.css']
})
export class PatientdetailComponent {

  constructor(private patservice:PatientformService){}
  patientName!: string;
  age!: number;
  gender!: string;
  address!: string;
  mobileNumber!: number;
  typeOfPatient!: string;

  item:Ipatient={
    patientName: '',
    age: 0,
    gender: '',
    address: '',
    mobileNumber: 0,
    typeOfPatient: ''
  }

  submitForm() {
    // You can implement the form submission logic here
    return this.patservice.postpatient(this.item).subscribe(data=>console.log(data)),alert("Patient Registered Successfully")
  }
  patient: Ipatient[] | undefined;

  getPatientByName(): void {
    console.log("getpatient called!!!!")
   
   this.patservice.getPatientByName(this.item.patientName).subscribe(data=>this.patient=data);

}
}
