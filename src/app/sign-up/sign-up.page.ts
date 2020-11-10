import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
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
    private api: ApiService,
    
    ) { }

  ngOnInit() {
  }

  verification() {
    const phone = this.user.phone.toString();
    const name =this.user.name;
    console.log(phone);
    this.api.createUser({
      "name": name,
        "mobile_number": phone
    })
      .subscribe(
        result => {
    this.route.navigate(['./verification'],  { queryParams:  {
      "name": name,
        "mobile_number": phone
    } });
          
          // this.loading = false;

          // this.successfullySignup = true;
          // this.state = this.states.codeVerifying;
          // this.stateButtonTitle = 'Verify Code';
          // this.state_response.status = 'Success';
          // this.state_response.message = 'Your Email is pre-approved by SuperAdmin';

        },
        error => {

     
         
          console.log(error);
          this.route.navigate(['./verification'],  { queryParams:  {
            "name": name,
              "mobile_number": phone
          } });
        }
      );
  }

  
}
