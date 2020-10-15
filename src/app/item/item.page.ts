import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  product_category;
  category_object = {
    "title": "Food & Beverages",
    "image": "food.jpeg",
    "product_category": "food_and_beverages"
};
category_items = [];
  constructor(private router: Router,
    public route: ActivatedRoute,
    public api: ApiService

  ) {
    this.route.params.subscribe(param => {
      console.log(param);
      this.product_category = param['product_category'];
      console.log(this.product_category);
      this.api.getHomepage({}).subscribe(data => {
       data['Item']['data']['categories'].forEach(category => {
         
         if(category.product_category == this.product_category){
           console.log(category);
           this.category_object = category;
         }
       });
       this.category_items = data['Item']['data']['featured_'+this.product_category];
        
   
      });
    });
  }

  ngOnInit() {
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }



  item_details() {
    this.router.navigate(['./item-detail']);
  } 
 item(product_category) {
    // this.router.navigate(['./item']);
    this.router.navigate([
      "./item",
      
      { product_category:product_category},
    ]);
  } 
 search() {
    this.router.navigate(['./search']);
  } 
  notifications() {
    this.router.navigate(['./notifications']);
  } 


 cart() {
    this.router.navigate(['./cart']);
  } 
  // wishlist() {
  //    this.route.navigate(['./wishlist']);
  //  } 
}
