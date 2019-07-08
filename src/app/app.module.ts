import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';





import * as firebase from "firebase";

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


  var config = {
    apiKey: "AIzaSyAdyIuubgeOZheLacrYO7WWdkrnT5Sr-p8",
    authDomain: "fresh-2637d.firebaseapp.com",
    databaseURL: "https://fresh-2637d.firebaseio.com",
    projectId: "fresh-2637d",
    storageBucket: "fresh-2637d.appspot.com",
    messagingSenderId: "861287988826"
  };

firebase.initializeApp(config);


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      AngularFireModule.initializeApp(config),
      AngularFirestoreModule.enablePersistence(),
      AngularFirestoreModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
