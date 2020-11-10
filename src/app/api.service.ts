import { Injectable } from '@angular/core';

import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string = "https://nj5pvm8f7a.execute-api.ap-south-1.amazonaws.com/Prod/";
  
  constructor(private  httpClient : HttpClient) { }
postData(url, params): Observable<any> {
  return this.httpClient.get<any>(
    url, params,
   
  )
}

public getHomepage(params): Observable<any> {
  let url = this.baseUrl + 'HOMEPAGE';
  return this.postData(url, params);
}
public createUser(params): Observable<any> {
  let url = this.baseUrl + 'user';
  return  this.httpClient.post<any>(
    url, params,
   
  )
}

public submitOtp(params): Observable<any> {
  let url = this.baseUrl + 'otp';
  return  this.httpClient.post<any>(
    url, params,
   
  )
}
public createProduct(params): Observable<any> {
  let url = this.baseUrl + 'product';
  return  this.httpClient.post<any>(
    url, params,
   
  )
}

public getProduct(params): Observable<any> {
  let url = this.baseUrl + 'product';
  return this.postData(url, {'pk':'5d884424-3932-4d62-bf07-2c925fa811b5',
    'sk':'PRODUCT_2d8d0e78-3c7f-4310-b6e3-a3fe409fd126'});
}



public addToCart(params): Observable<any> {
  let url = this.baseUrl + 'cart';
  return this.postData(url, {
    "product_sk": "PRODUCT_2d8d0e78-3c7f-4310-b6e3-a3fe409fd126",
      "seller_pk": "5d884424-3932-4d62-bf07-2c925fa811b5",
      "user_pk": "5d884424-3932-4d62-bf07-2c925fa811b5",
      "action": "add"
  });
}
public getOtp(params): Observable<any> {
//   {	"action": "request_otp",
//   "mobile_number": "1234567890"
// }
  let url = this.baseUrl + 'otp';
  return this.postData(url,params );
}
public getCart(pk): Observable<any> {
  let url = this.baseUrl + 'cart?pk='+ pk;
  return this.postData(url, {});
}


public createOrder(pk): Observable<any> {
  let url = this.baseUrl + 'order';
  return this.postData(url, {
    "payment_method": "UPI",
    "user_pk": "5d884424-3932-4d62-bf07-2c925fa811b5",
    "action": "place_order",
    "discount": {}
});
}

public getOrder(pk): Observable<any> {
  let url = this.baseUrl + 'order?pk='+ pk;
  return this.postData(url, {
    'pk':'5d884424-3932-4d62-bf07-2c925fa811b5',
    'sk':'ORDER_efeaf4ba-9c00-44e7-9000-84091a8b6f93'});
}


public createSeller(params): Observable<any> {
  let url = this.baseUrl + 'seller';
  return this.postData(url, {
    "profile_picture": "prifile_picture.png",
    "description": "lorem ipsem dolerr sit amet",
    "product_category": "food_and_beverages",
    "location": {
      "lat": 100,
      "lon": 100
    },
      "address": "Test address 101234",
      "user_pk": "5d884424-3932-4d62-bf07-2c925fa811b5",
    "workstatiion_images": ["image.png", "image.png"]
  });
}

public getSeller(pk): Observable<any> {
  let url = this.baseUrl + 'seller?pk='+ pk;
  return this.postData(url, {});
}

public getNewOrders(): Observable<any> {
  let url = this.baseUrl + 'order';
  return this.postData(url, {});
}

}
