import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireAuth } from 'angularfire2/auth';

import { MyApp } from './app.component';


import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';

 // Okay, I'm using my old labwork as template, so it has old firebase config, but it works, so i didn't make new one. For real CV I would.
      // 1601549 Aksel Kaya
 
const firebaseConfig = {
  apiKey: "AIzaSyAV8tt9LfglEw2B8xY0Z3t30FEkGNhTKhU",
  authDomain: "uapp-d1d9a.firebaseapp.com",
  databaseURL: "https://uapp-d1d9a.firebaseio.com",
  projectId: "uapp-d1d9a",
  storageBucket: "",
  messagingSenderId: "427266932316"
  };
 
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}