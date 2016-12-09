import {Component} from '@angular/core';

import {NavController, ToastController} from 'ionic-angular';
import {LocalRepository} from "../../app/app.local-repository";

@Component({
  selector: 'page-add-tag',
  templateUrl: 'add-tag.html'
})
export class AddTag {
  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {

  }

  goBack() {
    this.navCtrl.pop();
  }

  save(tagName: string) {
    let name = tagName.trim();

    if (!name) {
      let toast = this.toastCtrl.create({
        message: 'You should specify tag name',
        duration: 3000,
        position: 'bottom',
        showCloseButton: true
      });

      toast.present();
      return;
    }

    LocalRepository.getInstance().addTag(name).then(() => {
      this.navCtrl.pop();
    });
  }
}
