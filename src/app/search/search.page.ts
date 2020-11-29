import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    document.getElementById('ion-tab-bar').style.display = "none";
  
  }
search_result() {
    this.route.navigate(['./search-result']);
  } 
item() {
    this.route.navigate(['./item']);
  } 
}
