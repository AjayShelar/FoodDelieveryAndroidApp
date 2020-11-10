import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerHomePageRoutingModule } from './seller-home-routing.module';

import { SellerHomePage } from './seller-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellerHomePageRoutingModule
  ],
  declarations: [SellerHomePage]
})
export class SellerHomePageModule {}
