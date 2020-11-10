import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppModesPage } from './app-modes.page';

const routes: Routes = [
  {
    path: '',
    component: AppModesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppModesPageRoutingModule {}
