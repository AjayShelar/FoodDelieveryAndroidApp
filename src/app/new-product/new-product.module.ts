import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewProductPageRoutingModule } from './new-product-routing.module';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { NewProductPage } from './new-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NewProductPageRoutingModule
  ],
  providers:[ Camera,
    File,],
  declarations: [NewProductPage]
})
export class NewProductPageModule {}
