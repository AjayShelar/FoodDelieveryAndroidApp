import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    document.getElementById('ion-tab-bar').style.display = "none";
  
  }
add_address() {
    this.route.navigate(['./add-address']);
  } 
}
