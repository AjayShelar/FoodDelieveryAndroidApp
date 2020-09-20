import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {
item_category: string = "1";
item_sub_category: string = "1";
stock_availibility: string = "1";
  constructor() { }

  ngOnInit() {
  }

}
