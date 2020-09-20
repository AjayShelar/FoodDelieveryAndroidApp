import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { NewOrdersPageRoutingModule } from './new-orders-routing.module';

import { NewOrdersPage } from './new-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    NewOrdersPageRoutingModule
  ],
  declarations: [NewOrdersPage]
})
export class NewOrdersPageModule {}
