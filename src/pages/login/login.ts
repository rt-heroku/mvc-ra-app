import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';

import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

import { UserData } from '../../providers/user-data';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: FormGroup;
  main_page: { component: any };

  constructor(public alertCtrl: AlertController, public http: Http, public nav: NavController, public userData: UserData) {
    this.main_page = { component: TabsNavigationPage };

    this.login = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('test', Validators.required)
    });
  }
  doLogin(event){

    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    
    var link = 'https://resort-activities.herokuapp.com/api/v1/contact/login';
    var contact : any;
    contact = JSON.stringify(this.login.value);
    this.http.post(link, contact, options).subscribe(data => {
      let d: any;
      d = data.json();
      if (d.success){
        this.userData.login(d.data.email,d.data.sfid);
        console.log('User ' + d.data.email + ' signed in successfully!');
        this.nav.setRoot(this.main_page.component);
      }
      else
        this.showAlert(d.message);

    }, error => {
        console.log("Oooops!" + error);
        alert(error);
    });
  }
  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Login Error',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
  doLogin2(){
    console.log(this.login.value);
    this.userData.login('user@heroku.com','0034100000E73GVAAZ');
    this.nav.setRoot(this.main_page.component);
  }

  doFacebookLogin() {
    this.userData.login('user@heroku.com','0034100000E73GVAAZ');
    this.nav.setRoot(this.main_page.component);
  }

  doGoogleLogin() {
    this.userData.login('user@heroku.com','0034100000E73GVAAZ');
    this.nav.setRoot(this.main_page.component);
  }

  goToSignup() {
    this.userData.login('user@heroku.com','0034100000E73GVAAZ');
    this.nav.push(SignupPage);
  }

  goToForgotPassword() {
    this.nav.push(ForgotPasswordPage);
  }

}
