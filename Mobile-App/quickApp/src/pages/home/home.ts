import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { util } from '../../utility/utils';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countries: string[];
  errorMessage: string;
  userDisplayName: any;

  constructor(public navCtrl: NavController,
    public rest: RestProvider,
    private util: util,
    private storage: Storage,
    private alertCtrl: AlertController) {

      this.storage.get('userName').then((val) => {
        this.userDisplayName = val;
      });

    // this.getCountries();
  }

  onLogout() {
    let confirm = this.alertCtrl.create({
      title: 'Logout',
      message: 'Are you sure you want to Logout?',
      buttons: [
        {
          text: 'No',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: () => {

            this.navCtrl.setRoot(LoginPage);
            this.navCtrl.popToRoot;

          }
        }

      ]
    });
    confirm.present();
  }

}
