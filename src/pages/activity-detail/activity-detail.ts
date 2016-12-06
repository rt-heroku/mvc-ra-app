import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ActivityDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-activity-detail',
  templateUrl: 'activity-detail.html'
})
export class ActivityDetailPage {
  activity: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) 
  {
    this.activity = navParams.get('activity');
  }

  ionViewDidLoad() {
    console.log('Hello ActivityDetailPage Page');
  }

}
