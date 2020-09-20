import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TitlePage } from '../title/title.page';  
import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { BaseArrayClass, Geocoder, GeocoderResult, GoogleMap, GoogleMaps, GoogleMapsEvent, ILatLng, Marker } from '@ionic-native/google-maps';
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {
  map: GoogleMap;

  constructor(private modalController: ModalController,
    public loadingCtrl: LoadingController, private platform: Platform) { }

  title(){
    this.modalController.create({component:TitlePage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  } 


  map1: GoogleMap;
  map2: GoogleMap;
  loading: any;
  @ViewChild('search_address') search_address: ElementRef;


  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap1();
  }

  loadMap1() {
    console.log(this.search_address);
    (this.search_address as any).value = '1600 Amphitheatre Parkway, Mountain View, CA 94043, United States';
    this.map1 = GoogleMaps.create('map_canvas1');
  }

  async onButton1_click(event) {
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();
    this.map1.clear();

    // Address -> latitude,longitude
    Geocoder.geocode({
      "address": 'Универмаг белгород'
    })
    .then((results: GeocoderResult[]) => {
      console.log(results);
      this.loading.dismiss();

      if (results.length > 0) {
        let marker: Marker = this.map1.addMarkerSync({
          'position': results[0].position,
          'title':  JSON.stringify(results[0].position)
        });
        this.map1.animateCamera({
          'target': marker.getPosition(),
          'zoom': 17
        });

        marker.showInfoWindow();
      } else {
        alert("Not found");
      }
    });
  }

}
