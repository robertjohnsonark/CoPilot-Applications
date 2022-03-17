import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, Events, MenuController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Network } from '@ionic-native/network';
import { util } from '../utility/utils';
import { SideMenuContentComponent } from '../utility/side-menu-content/side-menu-content.component';
import { MenuOptionModel } from '../utility/side-menu-content/models/menu-option-model';
import { SideMenuSettings } from '../utility/side-menu-content/models/side-menu-settings';
import { environmentConstants } from '../constants/envConstants';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;

  @ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;

  rootPage: any = LoginPage;
  displayLoginName: string;
  jobTitle: string;
  appVersion: string;
  pages: Array<{ title: string, component: any }>;
  public options: Array<MenuOptionModel>;

  // Settings for the SideMenuComponent
  public sideMenuSettings: SideMenuSettings = {
    accordionMode: true,
    showSelectedOption: true,
    selectedOptionClass: 'my-selected-option',
    subOptionIndentation: {
      md: '56px',
      ios: '64px',
      wp: '56px'
    }
  };


  constructor(public platform: Platform,
    private network: Network,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private util: util,
    private menuCtrl: MenuController,
    private alertCtrl: AlertController,
    public events: Events,
    private envConstants: environmentConstants
  ) {
    this.initializeApp();

    this.events.subscribe('userName', (userName) => {
      this.displayLoginName = userName;
    });

    this.events.subscribe('jobTitle', (jobTitle) => {
      this.jobTitle = jobTitle;
    });

    this.appVersion = this.envConstants.appVersion;

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.listenNetworkStatus();
      this.sideMenuOptions();

    });
  }

  listenNetworkStatus(): any {
    // watch network for a disconnect
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.util.presentAlert('Alert', 'Please check internet connection and try again', 'Ok');
    });

    // stop disconnect watch
    // disconnectSubscription.unsubscribe();
    // watch network for a connection
    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      this.util.presentToast('Internet Connection Available');

      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('Wifi connected!');
        }
      }, 2000);
    });

    // stop connect watch
    // connectSubscription.unsubscribe();

  }

  sideMenuOptions(): void {
    this.options = new Array<MenuOptionModel>();

    // Load simple menu options
    // ------------------------------------------
    this.options.push({
      iconName: 'ai-TSR-List',
      displayName: 'Customers',
      component: HomePage,
      custom: {
        isCustomer: true
      },
      // This option is already selected 
      selected: true
    });

    //-------------------- Products ----------------------//

    this.options.push({
      iconName: 'ai-Alert',
      displayName: 'Products',
      custom: {
        isProduct: true
      },
      component: HomePage
    });

    //-------------------- Permissions ----------------------//


    this.options.push({
      iconName: 'ai-Alarm',
      displayName: 'Permissions',
      component: HomePage,
      custom: {
        isPermission: true
      },
    });

    // Load special options
    //-------------------- Load special options ----------------------//

    this.options.push({
      iconName: 'ai-Utilities',
      displayName: 'Utilites',
      // iconRight: 'apps',
      subItems: [
        {

          displayName: 'Calculator',
          custom: {
            isLogin: true
          }
        },
        {

          displayName: 'Notepad',
          custom: {
            isLogout: true
          }
        },
        {

          displayName: 'User List',
          custom: {
            isLogout: true
          }
        }
      ]
    });

    //-------------------- Profile Settings ----------------------//

    this.options.push({
      iconName: 'ai-Profile',
      displayName: 'Profile',
      subItems: [
        {

          displayName: 'Change Password',
          component: HomePage
          // custom: {
          // 	isChangePassword: true
          // }
        }
      ]
    });

  }

  public selectOption(option: MenuOptionModel): void {
    this.menuCtrl.close().then(() => {

      if (option.custom && option.custom.isLogin) {
        // this.presentAlert('You\'ve clicked the Calculator option!');
      } else if (option.custom && option.custom.isLogout) {
        // this.presentAlert('You\'ve clicked the Notepad option!');
      } else if (option.custom && option.custom.isChangePassword) {
        // this.presentAlert('You\'ve clicked the ChangePassword option!');
      } else if (option.custom && option.custom.isCustomer) {
        // this.presentAlert('You\'ve clicked the TSR option!');
      } else if (option.custom && option.custom.isProduct) {
        // this.presentAlert('You\'ve clicked the Alert option!');
      } else if (option.custom && option.custom.isPermission) {
        // this.navCtrl.setRoot(option.component || AlarmPage, { 'title': option.displayName });
        // this.presentAlert('You\'ve clicked the Alarm option!');
      }
      else if (option.custom && option.custom.isExternalLink) {
        let url = option.custom.externalUrl;
        window.open(url, '_blank');
      } else {
        // Redirect to the selected page
        this.navCtrl.setRoot(option.component || HomePage, { 'title': option.displayName });
      }
    });
  }

  public collapseMenuOptions(): void {
    // Collapse all the options
    this.sideMenu.collapseAllOptions();
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page.component);
  }

  logout() {
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
            this.navCtrl.setRoot('LoginPage');
            this.navCtrl.popToRoot();

          }
        }

      ]
    });
    confirm.present();
  }
}
