import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-seller-info',
  templateUrl: './seller-info.page.html',
  styleUrls: ['./seller-info.page.scss'],
})
export class SellerInfoPage implements OnInit {

  constructor(private route: Router,
    private socialSharing: SocialSharing) { }

  ngOnInit() {
  }

 item_details() {
    this.route.navigate(['./item-detail']);
  } 
 cart() {
    this.route.navigate(['./cart']);
  } 	
  
  share(){


    // Check if sharing via email is supported
    // this.socialSharing.share().then(() => {
    //   // Sharing via email is possible
    // }).catch(() => {
    //   // Sharing via email is not possible
    // });
    
    // Share via email
    this.socialSharing.share('Message and subject', 'The subject').then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
      }
}
