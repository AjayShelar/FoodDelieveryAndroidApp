import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppModesPageRoutingModule } from './app-modes-routing.module';

import { AppModesPage } from './app-modes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppModesPageRoutingModule
  ],
  declarations: [AppModesPage]
})
export class AppModesPageModule {
  
}
