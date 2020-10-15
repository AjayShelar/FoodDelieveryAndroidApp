import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearbySellersPage } from './nearby-sellers.page';

const routes: Routes = [
  {
    path: '',
    component: NearbySellersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearbySellersPageRoutingModule {}
