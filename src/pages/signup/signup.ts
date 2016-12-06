import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';

import { TermsOfServicePage } from '../terms-of-service/terms-of-service';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy';

import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { UserData } from '../../providers/user-data';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'signup-page',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: FormGroup;
  main_page: { component: any };

  constructor(
    public alertCtrl: AlertController, 
    public http: Http, public nav: NavController, 
    public modal: ModalController, public userData: UserData
  ) {
    this.main_page = { component: TabsNavigationPage };

    this.signup = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required), 
      email: new FormControl('', Validators.required),
      password: new FormControl('test', Validators.required),
      confirm_password: new FormControl('test', Validators.required)
    });
  }

  doSignup(event){

    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    
    var link = 'https://resort-activities.herokuapp.com/api/v1/contact/signup';
    var contact : any;
    contact = JSON.stringify(this.signup.value);

    this.http.post(link, contact, options).subscribe(data => {
      let d: any;
      d = data.json();
      this.userData.login(d.data.email,d.data.sfid);
      this.nav.setRoot(this.main_page.component);
    }, error => {
        console.log("Oooops!" + error);
        this.showAlert(error);
    });
  }

  doFacebookSignup() {
    this.nav.setRoot(this.main_page.component);
  }

  doGoogleSignup() {
    this.nav.setRoot(this.main_page.component);
  }

  showTermsModal() {
    let modal = this.modal.create(TermsOfServicePage);
    modal.present();
  }

  showPrivacyModal() {
    let modal = this.modal.create(PrivacyPolicyPage);
    modal.present();
  }

    showAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Login Error',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }


}
