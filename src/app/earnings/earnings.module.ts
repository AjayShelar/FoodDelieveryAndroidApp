import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { EarningsPageRoutingModule } from './earnings-routing.module';

import { EarningsPage } from './earnings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    EarningsPageRoutingModule
  ],
  declarations: [EarningsPage]
})
export class EarningsPageModule {}
