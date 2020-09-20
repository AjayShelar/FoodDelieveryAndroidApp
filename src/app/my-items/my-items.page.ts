import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.page.html',
  styleUrls: ['./my-items.page.scss'],
})
export class MyItemsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

item_details() {
    this.route.navigate(['./edit-item']);
  } 
reviews() {
    this.route.navigate(['./reviews']);
  } 
}
