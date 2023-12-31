import { Component } from '@angular/core';
import { Iappointment } from 'src/app/Models/appointment';
import { AppointmentformService } from 'src/app/Services/appointmentform.service';

@Component({
  selector: 'app-appointmentdetail',
  templateUrl: './appointmentdetail.component.html',
  styleUrls: ['./appointmentdetail.component.css']
})
export class AppointmentdetailComponent {
  constructor(private aptservice:AppointmentformService){}
  
  patientId!: number;
  problem!: string;
  dateToVisit!: string;
  timeslot!: string;
  specialisationLookingFor!: string;
  doctorId?: number;

  appointment:Iappointment={
    
    patientId:0,
    problem: '',
    dateToVisit: '',
    timeslot:'',
    specialisationLookingFor: '',
    doctorId: 0,
  }

  submitForm() {
    // You can implement the form submission logic here
     this.aptservice.postappointment(this.appointment).subscribe(data=>console.log(data));
     if(confirm("Your Appointment Booked successfully")){
       window.location.reload()
     }
  }

 
}
