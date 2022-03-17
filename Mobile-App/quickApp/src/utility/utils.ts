import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { LoadingController, AlertController, Platform, Events, ToastController } from 'ionic-angular';
import { appConstants } from "../constants/appConstants";

/**
 *   Contains the functions for some logical operations on data.
 */

@Injectable()
export class util {

    public loader: any;
    public alert: any;

    constructor(
        public loadingCtrl: LoadingController, public constants: appConstants,
        public alertCtrl: AlertController, public platform: Platform,
        public events: Events, private toastCtrl: ToastController) {

    }

    /**
     * Function name :Start Loader
     * 
     * Description:Function for starting the loading spinner.
     */
    // this.presentLoader('Login...');

    presentLoader(text: string) {
        this.loader = this.loadingCtrl.create({ content: text });
        this.loader.present();
    }

    /**
     * Function name :Dismiss Loader
     * 
     * Description:Function for stopping the loading spinner.
     */

    dismissLoader() {
        if (this.loader) this.loader.dismiss();
    }


    /**
   * Function Name: Present Alert
   * 
   * Description: Function to prompt user 
   * 
   */

    //   this.presentAlert('Signin Error', JSON.stringify(error), 'Dismiss');

    presentAlert(title: string, subTitle: any, button: string) {
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: [button]
        });
        this.alert.present();
    }

    dismissAlert() {
        if (this.alert) this.alert.dismiss();
    }


    presentToast(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'top'
        });

        toast.onDidDismiss(() => {
        });

        toast.present();
    }

}