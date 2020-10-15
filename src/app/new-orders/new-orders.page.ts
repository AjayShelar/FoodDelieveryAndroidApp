import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-orders',
  templateUrl: './new-orders.page.html',
  styleUrls: ['./new-orders.page.scss'],
})
export class NewOrdersPage implements OnInit {

  constructor(private route: Router,
    public api: ApiService
    ) { 

    // this.api.
  }

  ngOnInit() {
  }

order_info() {
    this.route.navigate(['./order-info']);
  } 
  addProduct(){
    this.route.navigate(['./new-product']);
  }
}
