import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleMap , GoogleMaps,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment} from '@ionic-native/google-maps';
import {  NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { NavController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  featured_rows = {};
  categories = [];
  banners = [];

  latitude: number;
  longitude: number;
  mode;

  @ViewChild('map',  {static: false}) mapElement: ElementRef;
  map: any;
  address:string;
  lat: string;
  long: string;  
  autocomplete: { input: string; };
  autocompleteItems: any[];
  location: any;
  placeid: any;
  GoogleAutocomplete: any;
  defaultLocation='Select Location';
  constructor(private route: Router,
    private activtated_route:ActivatedRoute,
    public navCtrl:NavController,
    public api:ApiService,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,    
    public zone: NgZone,
    ) { 



      this.mode = JSON.parse(localStorage.getItem('mode'))['mode'];
      if(this.mode ==='seller'){
        this.navCtrl.navigateRoot(['./new-orders']);
      
      }else{
      this.navCtrl.navigateRoot(['./home']);
  
      }

      console.log(JSON.parse(localStorage.getItem('location')));
      // if(JSON.parse(localStorage.getItem('location'))){
      // this.defaultLocation = JSON.parse(localStorage.getItem('location'))

      // }

      this.activtated_route.queryParams.subscribe(params => {
      console.log(params);
if(params['location']){
  this.defaultLocation = JSON.parse(params["location"]);

}
    });

      let obj = {
        "Item": {
            "pk": "HOMEPAGE",
            "sk": "HOMEPAGE",
            "data": {
                "featured_foods": [
                    {
                        "image": "food.jpeg",
                        "seller_name": "test seller",
                        "title": "test product",
                        "price": "123"
                    }
                ],
                "categories": [
                    {
                        "title": "Food & Beverages",
                        "image": "food.jpeg",
                        "product_category": "food_and_beverages"
                    },
                    {
                        "title": "Handicrafts",
                        "image": "handicraft.jpg",
                        "product_category": "handicrafts"
                    },
                    {
                        "title": "Fresh Fruits",
                        "image": "fruits.jpeg",
                        "product_category": "fruits"
                    },
                    {
                        "title": "Fresh Vegetables",
                        "image": "vegetables.jpeg",
                        "product_category": "vegetables"
                    }
                ],
                "featured_fruits": [
                    {
                        "image": "food.jpeg",
                        "seller_name": "test seller",
                        "title": "test product",
                        "price": "123"
                    }
                ],
                "featured_vegetables": [
                    {
                        "image": "food.jpeg",
                        "seller_name": "test seller",
                        "title": "test product",
                        "price": "123"
                    }
                ],
                "banners": [
                    {
                        "image": "food.jpeg",
                        "title": "Amazing Healthy Breakfast",
                        "product_category": "food_and_beverages",
                        "tags": [
                            "breakfast",
                            "healthy"
                        ]
                    },
                    {
                        "image": "handicraft.jpg",
                        "title": "Indian Furniture",
                        "product_category": "handicrafts",
                        "tags": [
                            "indian"
                        ]
                    }
                ],
                "featured_handicrafts": [
                    {
                        "image": "food.jpeg",
                        "seller_name": "test seller",
                        "title": "test product",
                        "price": "123"
                    }
                ]
            }
        },
        "ResponseMetadata": {
            "RequestId": "2MB6EB8N0IG122N2GMB4B68J0JVV4KQNSO5AEMVJF66Q9ASUAAJG",
            "HTTPStatusCode": 200,
            "HTTPHeaders": {
                "server": "Server",
                "date": "Tue, 13 Oct 2020 22:17:09 GMT",
                "content-type": "application/x-amz-json-1.0",
                "content-length": "1429",
                "connection": "keep-alive",
                "x-amzn-requestid": "2MB6EB8N0IG122N2GMB4B68J0JVV4KQNSO5AEMVJF66Q9ASUAAJG",
                "x-amz-crc32": "4280683378"
            },
            "RetryAttempts": 0
        }
    }
    this.featured_rows = obj['Item']['data'];
    this.categories = obj['Item']['data']['categories'];
    console.log(this.categories);
    this.banners = obj['Item']['data']['banners'];
      
    }

   
  ngOnInit() {

    // console.log(JSON.parse(localStorage.getItem('location')));
    // if(JSON.parse(localStorage.getItem('location'))){
    // this.defaultLocation = JSON.parse(localStorage.getItem('location'))['description'];

    // }
    this.activtated_route.queryParams.subscribe(params => {
      console.log(params);
if(params['location']){
  this.defaultLocation = JSON.parse(params["location"]);

}
    });
  }

 item_details() {
    this.route.navigate(['./item-detail']);
  } 
 item(product_category) {
    // this.route.navigate(['./item']);
    this.route.navigate([
      "./item",
      
      { product_category:product_category},
    ]);
  } 
 search() {
    this.route.navigate(['./search']);
  } 
  notifications() {
    this.route.navigate(['./notifications']);
  } 


 cart() {
    this.route.navigate(['./cart']);
  } 
  
  
  
  
  add_address() {
    this.route.navigate(['./add-address']);
  } 
  ionViewDidEnter() {
    document.getElementById('ion-tab-bar').style.display = "flex";
  
  }
}

   

