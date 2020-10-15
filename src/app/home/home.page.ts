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
import { NavController } from '@ionic/angular';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  map: GoogleMap;
  address: string;
  featured_rows = {};
  categories = [];
  banners = [];

  latitude: number;
  longitude: number;
  mode;
  constructor(private route: Router,
    public navCtrl:NavController,
    public api:ApiService
    ) { 

      this.mode = JSON.parse(localStorage.getItem('mode'))['mode'];
      if(this.mode ==='seller'){
        this.navCtrl.navigateRoot(['./new-orders']);
      
      }else{
      this.navCtrl.navigateRoot(['./home']);
  
      }

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

    ionViewDidLoad() {
      this.loadMap();
    }
  ngOnInit() {
   
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

   

