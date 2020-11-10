import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerOnboardingPageRoutingModule } from './seller-onboarding-routing.module';

import { SellerOnboardingPage } from './seller-onboarding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellerOnboardingPageRoutingModule
  ],
  declarations: [SellerOnboardingPage]
})
export class SellerOnboardingPageModule {}
