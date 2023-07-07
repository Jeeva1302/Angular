import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AdminpartComponent } from './adminpart/adminpart.component';
import { AdminhomeComponent } from './adminpart/adminhome/adminhome.component';
import { DoctordetailsComponent } from './adminpart/doctordetails/doctordetails.component';
import { GetappointmentdetailComponent } from './adminpart/getappointmentdetail/getappointmentdetail.component';
import { GetdoctorsComponent } from './appointment-booking/getdoctors/getdoctors.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  {path:'signup/signin',component:SigninComponent},
  {path:'signin/signup',component:SignupComponent},
  {path:'signin/signup/signin',component:SigninComponent},
  {path:'signup/signin/signup',component:SignupComponent},
  { path: 'header', component: HeaderComponent },
  { path: 'Footer', component: FooterComponent },
  { path: 'appointment-Booking', component: AppointmentBookingComponent },
  { path: 'feedback', component: FeedbackComponent },
  {path:'admin',component:AdminpartComponent},
  {path:'adminhome', component:AdminhomeComponent},
  {path:'doctordetail', component:DoctordetailsComponent},
  {path:'getaptdetail', component:GetappointmentdetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
