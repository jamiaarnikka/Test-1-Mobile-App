import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 *I put tabroots to get this application working, If I had more time or would do this in other purpose than learning purpose, I would change Icons. Tabs.html is done too.
 1601549@Aksel Kaya
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root='HomePage';
  tab2Root='AboutPage';
  tab3Root='ActivitiesPage';
  tab4Root='ContactInformationPage';
  tab5Root='ExtraCurriculumPage';
  tab6Root='TargetedCvPage';
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

} 