import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerHomePage } from './seller-home.page';

const routes: Routes = [
  {
    path: '',
    component: SellerHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerHomePageRoutingModule {}
