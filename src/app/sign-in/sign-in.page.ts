import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../api/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  user = {
    phone:''
  };
  mode;
  constructor(private navCtrl: NavController, private route: Router,
    private auth: AuthService,
    ) { }

  ngOnInit() {
  }
  home() {
    this.mode = JSON.parse(localStorage.getItem('mode'))['mode'];
    if(this.mode ==='seller'){
      this.navCtrl.navigateRoot(['./new-orders']);
    
    }else{
    this.navCtrl.navigateRoot(['./home']);

    }
  } 
 sign_up() {
    this.route.navigate(['./verification']);
  } 
  sign_in(){
    const phone = "+91" + this.user.phone;
    this.auth.signIn(phone)
      .subscribe(
        result => {
          // this.router.navigate(['/']);
          console.log(result);
          // const username = this.user.email;
          // sonic_user['last_login'] = new Date().getUTCSeconds();
          // sonic_user['helper_function'] = "update_sonic_user";
          // this.api.createUser(sonic_user);
          // this.api.getUserDetails({
          //   "helper_function": "get_sonic_user",
          //   "email": result.attributes.email
          // }).subscribe((_user) => {
            // sonic_user = _user;
            // if (sonic_user.hasOwnProperty('is_active') && sonic_user['is_active']) {
            //   this.router.navigateByUrl('/pages/partner/all-partners');
              // localStorage.setItem('LoggedInUser', JSON.stringify(_user));

            // } else {
              // this.errors.push('User is deactivated');

            // }



          // });
          this.auth.getCurrentSession().subscribe((data) => {
            console.log(data);
            localStorage.setItem('loggedIn', JSON.stringify(true));

            // this.loading = false;

          })

        },
        error => {
          // this.loading = false;
          console.log(error);
          // this.errors.push(error.message);
    this.route.navigate(['./sign-up']);

        });

  }
}
