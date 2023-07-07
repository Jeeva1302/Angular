import { Component } from '@angular/core';
import { Iappointment } from 'src/app/Models/appointment';
import { AppointmentformService } from 'src/app/Services/appointmentform.service';

@Component({
  selector: 'app-getappointmentdetail',
  templateUrl: './getappointmentdetail.component.html',
  styleUrls: ['./getappointmentdetail.component.css']
})
export class GetappointmentdetailComponent {

  constructor(private appservice:AppointmentformService){}


  appointmentId?: number;
  patientId?: number;
  problem!: string;
  dateToVisit!: string;
  timeslot!: string;
  specialisationLookingFor!: string;
  doctorId?: number;

  appointment:Iappointment={
    problem: '',
    dateToVisit: '',
    timeslot: '',
    specialisationLookingFor: ''
  }
  
  appointments: Iappointment[] = [];

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.appservice.getappointment().subscribe(
      (data) => {
        this.appointments = data;
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
}
}
