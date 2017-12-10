// In this point I have been change for example the title names and I did new import (myapp). This point defines names for all pages. //
//I copied this point from my last online test. Jami Aarnikka 1701436.//
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage="TabsPage";

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    {title: 'Profile', pageName: 'HomePage', tabComponent: 'HomePage', index: 0, icon: 'home'},
    {title: 'Projects', pageName: 'HomePage', tabComponent: 'AboutPage', index: 1,  icon: 'logo-steam'},
    {title: 'Skills', pageName: 'HomePage', tabComponent: 'ActivitiesPage', index: 2,  icon: 'logo-steam'},
    {title: 'Contact', pageName: 'HomePage', tabComponent: 'ContactInformationPage', index: 3,  icon: 'logo-steam'},
    {title: 'Hobbies', pageName: 'HomePage', tabComponent: 'ExtraCurriculumPage', index: 4,  icon: 'logo-steam'},
    {title: 'CV', pageName: 'HomePage', tabComponent: 'TargetedCvPage', index: 5,  icon: 'logo-steam'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }
  
    openPage(page: PageInterface){

    let params ={};

if(page.index){
  params = {tabIndex: page.index};
}
if(this.nav.getActiveChildNav() && page.index != undefined) {
  this.nav.getActiveChildNav().select(page.index);
} else {
  this.nav.setRoot(page.pageName, params);
}

}

    isActive(page: PageInterface){
      let childNav = this.nav.getActiveChildNav();

      if(childNav){
        if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
          return 'primary';
        }
        return;

      }
      if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
        return 'primary';
      }
    }
    logout(){
      
      this.app.getRootNav().setRoot(MyApp);
  }
}