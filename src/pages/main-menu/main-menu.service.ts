import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { MainMenuModel } from './main-menu.model';

@Injectable()
export class MainMenuService {
  constructor(public http: Http) {}

  getData(): Promise<MainMenuModel> {
    return this.http.get('./assets/example_data/main-menu.json')
     .toPromise()
     .then(response => response.json() as MainMenuModel)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
