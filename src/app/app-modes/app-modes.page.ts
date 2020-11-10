import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-modes',
  templateUrl: './app-modes.page.html',
  styleUrls: ['./app-modes.page.scss'],
})
export class AppModesPage implements OnInit {
  mode;
  BuyerModeClicked =false;
  SellerModeClicked =false;
  constructor(
    public router: Router,
    
  ) { }

  ngOnInit() {
  }

  click(mode){
      this.mode = mode;
      localStorage.setItem('mode', JSON.stringify({mode:this.mode}));
  }
  navigate(page){
    switch (page) {
      case 'homepage':
        this.router.navigateByUrl('home');
        
        break;
      case 'sellers':
        this.router.navigateByUrl('sellers');
        break;
      case 'sell':
        this.router.navigateByUrl('seller-home');
        break;
      case 'account':
        this.router.navigateByUrl('account');
        break;
      default:
        break;
    }
  }

}
