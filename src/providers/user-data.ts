import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class UserData {
  _favorite = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  constructor(public events: Events, public storage: Storage) {}

  hasFavorite(sessionName) {
    return (this._favorite.indexOf(sessionName) > -1);
  };

  addFavorite(sessionName) {
    this._favorite.push(sessionName);
  };

  removeFavorite(sessionName) {
    let index = this._favorite.indexOf(sessionName);
    if (index > -1) {
      this._favorite.splice(index, 1);
    }
  };

  login(username, sfid) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.setId(sfid);
    this.events.publish('user:login');
  };

  signup(username, sfid) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.setId(sfid);
    this.events.publish('user:signup');
  };

  logout() {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  };

  setUsername(username) {
    this.storage.set('username', username);
  };

  setId(id) {
    this.storage.set('sfid', id);
  };

  getId() {
    return this.storage.get('sfid').then((value) => {
      console.log('value  = ' + value);
      return value;
    });
  };
  getUsername() {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  // return a promise
  hasLoggedIn() {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      console.log('hasLoggedIn = ' + value + ' - ' + (value === true) );
      return value === true;
    });
  };

  checkHasSeenTutorial() {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    })
  };
}