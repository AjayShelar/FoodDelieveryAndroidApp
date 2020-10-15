import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {
  product;
  private currentNumber = 0;
  constructor(public route:ActivatedRoute,
    public router: Router,
    public api: ApiService
    ) {
      this.route.params.subscribe((param)=>{
        this.api.getProduct({product_pk:param['product_pk'], product_sk:param['product_sk']}).subscribe(
          (data)=>{
            this.product = data;
          }
        )
      })
     }

  ngOnInit() {
  }
  private increment () {
    this.currentNumber++;
  }
  
  private decrement () {
    this.currentNumber--;
  }
  subscribe(){
    console.log('subscribe');
  }
  select_address() {
    this.router.navigate(['./select-address']);
  } 

}
