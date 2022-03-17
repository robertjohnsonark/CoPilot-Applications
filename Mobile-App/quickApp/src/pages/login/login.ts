import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { util } from '../../utility/utils';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';
import { loginResponse } from '../../modal/login'
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private login: { username?: string, password?: string } = {};
  private submitted: boolean = false;
  private loader: any;
  private alert: any;
  loginResponse: loginResponse;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private util: util,
    private storage: Storage,
    private rest: RestProvider,
    private events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin(form: NgForm) {
    this.submitted = true;
    this.util.presentLoader('Login...');

    if (form.valid) {
      console.log(this.login.username + " : " + this.login.password)
      this.rest.login(this.login.username, this.login.password).subscribe(data => {
        console.log('Login Data: ', data);
        this.loginResponse = data;
        this.util.dismissLoader();
        if (this.loginResponse.status == true) {
          this.storage.set('userName', this.loginResponse.user.fullname);
          this.events.publish('userName', this.loginResponse.user.fullname);
          this.events.publish('jobTitle', this.loginResponse.user.jobtitle);
          this.navCtrl.setRoot(HomePage);
          this.navCtrl.push;
        } else {
          this.util.presentAlert('Login Error', 'Invalid Credentials', 'Dismiss');

        }


      }, error => {
        console.log('Login Error: ', error);
        this.util.dismissLoader();
      });
    }
  }

  // onSignup() {
  //   this.navCtrl.push(SignupPage);
  // }

}
