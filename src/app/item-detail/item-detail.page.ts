import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
FavoriteIcon = false;
  constructor(private route: Router, private socialSharing: SocialSharing) { }

  ngOnInit() {
  }

 toggleFavoriteIcon(){
   this.FavoriteIcon = !this.FavoriteIcon;
   }
	
cart() {
    this.route.navigate(['./cart']);
  } 
reviews() {
    this.route.navigate(['./reviews']);
  } 
seller_info() {
    this.route.navigate(['./seller-info']);
  } 

  share(){


// Check if sharing via email is supported
this.socialSharing.canShareViaEmail().then(() => {
  // Sharing via email is possible
}).catch(() => {
  // Sharing via email is not possible
});

// Share via email
this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
  // Success!
}).catch(() => {
  // Error!
});
  }
}
