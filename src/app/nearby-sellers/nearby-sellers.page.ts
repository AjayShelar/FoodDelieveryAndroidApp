import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nearby-sellers',
  templateUrl: './nearby-sellers.page.html',
  styleUrls: ['./nearby-sellers.page.scss'],
})
export class NearbySellersPage implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }
  search() {
    this.route.navigate(['./search']);
  } 
  viewSellerProfile(seller_pk){
    this.route.navigate(['./seller-info']);

  }
  notifications() {
    this.route.navigate(['./notifications']);
  } 
}
