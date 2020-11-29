import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    document.getElementById('ion-tab-bar').style.display = "none";
  
  }
}
