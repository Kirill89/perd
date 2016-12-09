import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {AddTag} from "../add-tag/add-tag";
import {LocalRepository} from "../../app/app.local-repository";

@Component({
  selector: 'page-tags',
  templateUrl: 'tags.html'
})
export class Tags {
  selectedItem: any;
  items: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    LocalRepository.getInstance().getTags().then(tags => {
      this.items = tags;
    })
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Tags, {
      item: item
    });
  }

  addTag() {
    this.navCtrl.push(AddTag);
  }
}
