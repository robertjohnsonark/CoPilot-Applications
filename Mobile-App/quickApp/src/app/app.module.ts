import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http';
import { Network } from '@ionic-native/network';
import { environmentConstants } from "../constants/envConstants";
import { appConstants } from "../constants/appConstants";
import { util } from '../utility/utils';
import { IonicStorageModule } from '@ionic/storage';
import { SideMenuContentComponent } from '../utility/side-menu-content/side-menu-content.component';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    SideMenuContentComponent,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    Network,
    environmentConstants, appConstants, util
  ]
})
export class AppModule {}
