import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-orders',
  templateUrl: './new-orders.page.html',
  styleUrls: ['./new-orders.page.scss'],
})
export class NewOrdersPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

order_info() {
    this.route.navigate(['./order-info']);
  } 
}
