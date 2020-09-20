import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
    
    ) { }

  ngOnInit() {
  }

  home() {
    this.navCtrl.navigateRoot(['./home']);

  } 
  onSubmitConfirmation() {
    const email = this.user.email, confirmationCode = this.user.code;

    this.auth.confirmSignUp(email, confirmationCode)
      .subscribe(
        result => {
          this.home();

        },
        error => {
    
          console.log(error);
        });
  }

}
