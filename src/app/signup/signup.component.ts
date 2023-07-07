import { Component } from '@angular/core';
import { SignupService } from '../Services/signup.service';
import { Isignup } from '../Models/signup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 
  constructor(private user:SignupService,private route:Router){}

  userId!: number;
  userName!: string;
  emailId!: string;
  role!: string;
  password!: string;

  item:Isignup={

  userId: 0,
  userName: '',
  emailId: '',
  role: '',
  password: ''
  }
 submitForm(){

  this.user.postuser(this.item).subscribe((result: any)=>console.log(result));
  
    if(confirm('Registered successfully'))
    {
      this.route.navigate(['/signin']);
    }

 }
}



