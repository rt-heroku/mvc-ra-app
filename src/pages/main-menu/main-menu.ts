import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import 'rxjs/Rx';

import { MainMenuModel } from './main-menu.model';
import { MainMenuService } from './main-menu.service';

@Component({
  selector: 'page-main-menu',
  templateUrl: 'main-menu.html'
})
export class MainMenuPage {
  mainmenu: MainMenuModel = new MainMenuModel();
  loading: any;

  constructor(
    public navCtrl: NavController,
    public mainMenuService: MainMenuService,
    public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.mainMenuService
      .getData()
      .then(data => {
        this.mainmenu.banner_image = data.banner_image;
        this.mainmenu.banner_title = data.banner_title;
        this.mainmenu.apps = data.apps;
        this.loading.dismiss();
      });
  }

}
