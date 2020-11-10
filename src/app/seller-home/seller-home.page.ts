import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.page.html',
  styleUrls: ['./seller-home.page.scss'],
})
export class SellerHomePage implements OnInit {
user= {name:"",
phone:""};
  constructor(public router: Router,
    public api: ApiService
    ) { 
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    // this.user.name = user['user']['name'];
    // this.user.phone = user['user']['mobile_number'];

  }

  ngOnInit() {
    
  }
  goToSellerOnboarding(){
    this.router.navigate(['./seller-onboarding'])
  }

}
