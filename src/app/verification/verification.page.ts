import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {
  code;
  user: any = {};

  constructor(private navCtrl: NavController,
    private auth: AuthService,
    public api:ApiService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
 this.route
      .params
      .subscribe(params => {
        console.log(params);
        // Defaults to 0 if no query param provided.
        this.user.phone = +params['mobile_number'] || 0;
        this.user.name = +params['name'] || 0;
      });
  }

  home() {
    this.navCtrl.navigateRoot(['./home']);

  }
  ionViewDidEnter() {
    document.getElementById('ion-tab-bar').style.display = "none";
  
  } 
  onSubmitConfirmation() {
    const phone = this.user.phone, confirmationCode = this.user.code;
    console.log('sadasjd')
    this.api.submitOtp({
      "otp": confirmationCode,
        "mobile_number": phone
    })
      .subscribe(
        result => {
    this.router.navigate(['./app-modes']);
    let loggedIn = localStorage.setItem('loggedIn', JSON.stringify({loggedIn:true}));
    let user = localStorage.setItem('user', JSON.stringify({
      "name": this.user.name,
        "mobile_number": this.user.phone
    }));
   

        },
        error => {
          this.router.navigate(['./app-modes']);
          // let loggedIn = localStorage.setItem('loggedIn', JSON.stringify({loggedIn:true}));

          console.log(error);
        });
  }

}
