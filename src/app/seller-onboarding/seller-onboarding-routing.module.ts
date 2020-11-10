import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerOnboardingPage } from './seller-onboarding.page';

const routes: Routes = [
  {
    path: '',
    component: SellerOnboardingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerOnboardingPageRoutingModule {}
