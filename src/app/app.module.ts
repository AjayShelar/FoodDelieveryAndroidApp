import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TitlePageModule } from './title/title.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_CONFIG, BaseAppConfig } from './app.config';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent,
  ],
  entryComponents: [],
    imports: [
	  BrowserModule, 
	  IonicModule.forRoot(), 
      AppRoutingModule,
      ComponentsModule,
      HttpClientModule,
      TranslateModule,   
      TitlePageModule,   
      TranslateModule.forRoot({
        loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    Camera,
    File,
    { provide: APP_CONFIG, useValue: BaseAppConfig },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      AuthService,
      // { provide: BrowserXhr, useClass: NgProgressRef }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { environment } from '../environments/environment.prod';

import Amplify, { Auth } from 'aws-amplify';
import { AuthService } from './api/auth.service';
import { GoogleMapsService } from './google-maps.service';
import { ConnectivityServiceService } from './connectivity-service.service';
import { Network } from '@ionic-native/network';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';

import { ComponentsModule } from './components/components.module';
Amplify.configure(environment.amplify);