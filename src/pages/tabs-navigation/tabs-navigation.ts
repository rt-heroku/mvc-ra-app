import { Component } from '@angular/core';

import { ListingPage } from '../listing/listing';
import { ProfilePage } from '../profile/profile';
import { SchedulePage } from '../schedule/schedule';
import { NotificationsPage } from '../notifications/notifications';
import { MainMenuPage } from '../main-menu/main-menu';
import { MapPage } from '../map/map';

@Component({
  selector: 'tabs-navigation',
  templateUrl: 'tabs-navigation.html'
})
export class TabsNavigationPage {
  calendar: any;
  activities: any;
  notifications: any;
  map: any;
  apps: any;
  dinning: any;
  mainMenu: any;

  constructor() {
    this.apps = MainMenuPage;
    this.calendar = SchedulePage;
    this.activities = ListingPage;
    this.map = MapPage;
    this.notifications = NotificationsPage;
    this.dinning = ListingPage;
  }
}
