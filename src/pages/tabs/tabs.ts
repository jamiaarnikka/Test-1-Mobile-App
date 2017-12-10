import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 *Jami Aarnikka 1701436.
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