import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  user: any = {};

  constructor(private route: Router,
    private auth: AuthService,
    
    ) { }

  ngOnInit() {
  }

  verification() {
    const phone = '+91'+this.user.phone.toString();
    const password ='passwordless';
    console.log(phone);
    this.auth.signUp(phone, password)
      .subscribe(
        result => {
    this.route.navigate(['./verification']);
          
          // this.loading = false;

          // this.successfullySignup = true;
          // this.state = this.states.codeVerifying;
          // this.stateButtonTitle = 'Verify Code';
          // this.state_response.status = 'Success';
          // this.state_response.message = 'Your Email is pre-approved by SuperAdmin';

        },
        error => {

     
         
          console.log(error);
        }
      );
  }

  
}
