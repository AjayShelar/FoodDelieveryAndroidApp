import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { MyItemsPageRoutingModule } from './my-items-routing.module';

import { MyItemsPage } from './my-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,    
    MyItemsPageRoutingModule
  ],
  declarations: [MyItemsPage]
})
export class MyItemsPageModule {}
