import { Component } from '@angular/core';
import { NavController, SegmentButton, LoadingController } from 'ionic-angular';
import 'rxjs/Rx';

import { ScheduleModel } from './schedule.model';
import { ScheduleService } from './schedule.service';
import { ActivityDetailPage } from '../activity-detail/activity-detail';

@Component({
  selector: 'schedule-page',
  templateUrl: 'schedule.html'
})
export class SchedulePage {
  segment: string;
  schedule: ScheduleModel = new ScheduleModel();
  loading: any;

  constructor(
    public nav: NavController,
    public scheduleService: ScheduleService,
    public loadingCtrl: LoadingController
  ) {
    this.segment = "mine";
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.scheduleService
      .getData()
      .then(data => {
        this.schedule.mine = data.mine;
        this.schedule.today = data.today;
        this.schedule.upcoming = data.upcoming;
        this.loading.dismiss();
      });
  }

  goToDetail(item: any){
    console.log (item);
    this.nav.push(ActivityDetailPage, {
      activity: item
    });
  }

  // doRefresh(refresher) {
  //   console.log('Begin async operation', refresher);
  //   this.loading.present();
  //   this.scheduleService
  //     .getData()
  //     .then(data => {
  //       this.schedule.today = data.today;
  //       this.schedule.upcoming = data.upcoming;
  //       this.loading.dismiss();
  //       refresher.complete();
  //     });
    
  // }
  
  onSegmentChanged(segmentButton: SegmentButton) {
    // console.log('Segment changed to', segmentButton.value);
  }

  onSegmentSelected(segmentButton: SegmentButton) {
    // console.log('Segment selected', segmentButton.value);
  }

}
