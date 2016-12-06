import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { ScheduleModel } from './schedule.model';
import { UserData } from '../../providers/user-data';

@Injectable()
export class ScheduleService {
  url: string;
  sfid: string;
  constructor(public http: Http, public userData: UserData) {
  }
 
  getData(): Promise<ScheduleModel> {
//    return this.http.get('./assets/example_data/schedule.json') // TEST
    return this.callService();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getSfIdFirst()  {
    this.userData.getId().then((sfid) => {
      this.sfid = sfid;
      return this.callService();
    });
  }

  callService(): Promise<ScheduleModel> {
    console.log('sfid = ' + this.sfid);
    console.log(this.sfid);
    this.url = 'https://resort-activities.herokuapp.com/api/v1/resortactivities/mine/0034100000E7KAVAA3';
    //this.url = 'https://resort-activities.herokuapp.com/api/v1/resortactivities/mine/' + this.sfid;
    console.log('calling service: ' + this.url);
    return this.http.get(this.url)
     .toPromise()
     .then(response => response.json().data as ScheduleModel)
     .catch(this.handleError);

  }

}
