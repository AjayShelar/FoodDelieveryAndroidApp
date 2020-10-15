import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbySellersPageRoutingModule } from './nearby-sellers-routing.module';

import { NearbySellersPage } from './nearby-sellers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbySellersPageRoutingModule
  ],
  declarations: [NearbySellersPage]
})
export class NearbySellersPageModule {}
