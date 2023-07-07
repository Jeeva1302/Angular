import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SigninComponent } from './signin/signin.component';
import { PatientdetailComponent } from './appointment-booking/patientdetail/patientdetail.component';
import { AppointmentdetailComponent } from './appointment-booking/appointmentdetail/appointmentdetail.component';
import { Component, OnInit } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { AdminpartComponent } from './adminpart/adminpart.component';
import { Header2Component } from './adminpart/header2/header2.component';
import { DoctordetailsComponent } from './adminpart/doctordetails/doctordetails.component';
import { AdminhomeComponent } from './adminpart/adminhome/adminhome.component';
import { GetappointmentdetailComponent } from './adminpart/getappointmentdetail/getappointmentdetail.component';
import { AdddoctorComponent } from './adminpart/doctordetails/adddoctor/adddoctor.component';
import { UpdatedoctorComponent } from './adminpart/doctordetails/updatedoctor/updatedoctor.component';
import { DeletedoctorComponent } from './adminpart/doctordetails/deletedoctor/deletedoctor.component';
import { GetdoctorsComponent } from './appointment-booking/getdoctors/getdoctors.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AppointmentBookingComponent,
    FeedbackComponent,
   
    SigninComponent,
    PatientdetailComponent,
    AppointmentdetailComponent,
    SignupComponent,
    AdminpartComponent,
    Header2Component,
    DoctordetailsComponent,
    AdminhomeComponent,
    GetappointmentdetailComponent,
    AdddoctorComponent,
    UpdatedoctorComponent,
    DeletedoctorComponent,
    GetdoctorsComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
