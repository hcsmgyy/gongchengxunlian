import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the GlobalStorageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GlobalStorageProvider {

  constructor(private storage:Storage) {
    console.log('Hello GlobalStorageProvider Provider');
  }

  setStorage(key, val) {
    this.storage.set(key, val);
  }
  getStorage(key) {
    return this.storage.get(key);
  }

}
