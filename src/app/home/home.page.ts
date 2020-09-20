import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleMap , GoogleMaps,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment} from '@ionic-native/google-maps';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  map: GoogleMap;
  address: string;

  latitude: number;
  longitude: number;
  mode;
  constructor(private route: Router,
    ) { 

    this.mode = JSON.parse(localStorage.getItem('mode'))['mode'];
if(this.mode ==='seller'){

}
      
    }

    ionViewDidLoad() {
      this.loadMap();
    }
  ngOnInit() {
   
  }

 item_details() {
    this.route.navigate(['./item-detail']);
  } 
 item() {
    this.route.navigate(['./item']);
  } 
 search() {
    this.route.navigate(['./search']);
  } 
 cart() {
    this.route.navigate(['./cart']);
  } 
  loadMap() {

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '(your api key for `https://`)',
      'API_KEY_FOR_BROWSER_DEBUG': '(your api key for `http://`)'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }
}

   

