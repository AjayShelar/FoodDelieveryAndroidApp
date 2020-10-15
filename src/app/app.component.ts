import { Component, OnInit, Inject } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateService } from '@ngx-translate/core';
import { MyEvent } from 'src/services/myevent.services';
import { Constants } from 'src/models/contants.models';
import { APP_CONFIG, AppConfig } from './app.config';
import { Router } from '@angular/router';
import { NewOrdersPage } from './new-orders/new-orders.page';
import { menuItems } from '../assets/data/menu-items';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  rtlSide = "left";
  mode = 'buyer';
  private menu = menuItems;
  show = true;
  public pageList = [
   
    {
        iconName: 'list', displayText: 'Food & Beverages', expanded: false, hasChild: true,
        subOptions: [
            {iconName: 'card', displayText: 'Chinese', url: '/list'},
            {iconName: 'cash', displayText: 'Continental', url: '/list1'},
            {iconName: 'clock', displayText: 'Thai', url: '/list2'},
            {iconName: 'clock', displayText: 'Italian', url: '/list3'},
            {iconName: 'clock', displayText: 'Snacks', url: '/list4'},
            {iconName: 'clock', displayText: 'South Indian', url: '/list5'},
            {iconName: 'clock', displayText: 'Rajasthani', url: '/list6'},
        ]
    },
    {
        iconName: 'flame', displayText: 'Handcrafted Products', expanded: false, hasChild: true,
        subOptions: [
            {iconName: 'flask', displayText: 'Textile products', url: '/item'},
            {iconName: 'headset', displayText: 'Leather products', url: '/item'},
            {iconName: 'infinite', displayText: 'Wooden products', url: '/item'},
            {iconName: 'leaf', displayText: 'Metal products', url: '/item'},
            {iconName: 'medal', displayText: 'Stone products', url: '/item'},
            {iconName: 'medical', displayText: 'Paper/canvas', url: '/item'},
            {iconName: 'nuclear', displayText: 'Others', url: '/item'}
        ]
    },
    {
        iconName: 'radio-button-on', displayText: 'Farm Fresh', expanded: false, hasChild: true,
        subOptions: [
            {iconName: 'map', displayText: 'Vegetables', url: '/list-sliding'},
            {iconName: 'magnet', displayText: 'Fruits', url: '/list-reorder'},
     
        ]
    },
   
];



  public selectedIndex = 0;
  
  // public appPages = [
  //   {
  //     title: 'home',
  //     url: '/home',
  //     icon: 'zmdi zmdi-home'
  //   },
  //   {
  //     title: 'my_profile',
  //     url: '/my-profile',
  //     icon: 'zmdi zmdi-assignment-account'
  //   },
  //   {
  //     title: 'my_orders',
  //     url: '/my-orders',
  //     icon: 'zmdi zmdi-shopping-cart'
  //   },
  //   {
  //     title: 'offers',
  //     url: '/offers',
  //     icon: 'zmdi zmdi-label'
  //   },
  //   {
  //     title: 'my_wishlist',
  //     url: '/wishlist',
  //     icon: 'zmdi zmdi-favorite'
  //   },

  //   {
  //     title: 'about_us',
  //     url: '/about-us',
  //     icon: 'zmdi zmdi-assignment'
  //   },

  //   {
  //     title: 'help_center',
  //     url: '/contact-us',
  //     icon: 'zmdi zmdi-comment-text'
  //   },
  //   // {
  //   //   title: 'languges',
  //   //   url: '/language',
  //   //   icon: 'zmdi zmdi-globe'
  //   // },
  //   {
  //     title: 'logout',
  //     url: '/sign-in',
  //     icon: 'zmdi zmdi-open-in-new'
  //   },

  // ];
  public appPages = [
    {
      list_header: 'Client List',
      icon: 'home',
      subList: [{
        subList_title: [

          {
            title: 'a'
          },
          {
            title: 'b'
          }
        ]

      }]
    }] 


  constructor(
    @Inject(APP_CONFIG) public config: AppConfig,
    private platform: Platform, private navCtrl: NavController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    
    private translate: TranslateService, private myEvent: MyEvent,
    public router: Router,
    
    ) {
    this.initializeApp();
    this.myEvent.getLanguageObservable().subscribe(value => {
      this.navCtrl.navigateRoot(['./']);
      this.globalize(value);
    });
    this.mode = 'buyer';
    localStorage.setItem('mode', JSON.stringify({mode:'buyer'}));
    if(['/home', '/my-profile', '/wishlist', '/seller'].includes(this.router.url)){
      this.show = false;
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
      this.globalize(defaultLang);
    });
  }

  globalize(languagePriority) {
    this.translate.setDefaultLang("en");
    let defaultLangCode = this.config.availableLanguages[0].code;
    this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
  }

  setDirectionAccordingly(lang: string) {
    switch (lang) {
      case 'ar': {
        this.rtlSide = "rtl";
        break;
      }
      default: {
        this.rtlSide = "ltr";
        break;
      }
    }
  }
  
  isLevel1Shown(i){
return false;
  }
  toggleLevel1(i){
return
  }
  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.list_header.toLowerCase() === path.toLowerCase());
    }
  }
  toggle(event){
    console.log(event);
 this.splashScreen.show();
//  document.location.href = 'index.html';

    if(event.detail['checked']){
      this.router.navigateByUrl('new-orders');

      this.mode = 'seller';
      localStorage.setItem('mode', JSON.stringify({mode:'seller'}));
      var initialHref = window.location.href;
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
      this.globalize(defaultLang);

    }else{
      
      this.router.navigateByUrl('/');
      this.mode = 'buyer';
    localStorage.setItem('mode', JSON.stringify({mode:'buyer'}));
    this.statusBar.styleDefault();
    this.splashScreen.hide();

    let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
    this.globalize(defaultLang);


    }
  }

  profile(){
    this.router.navigateByUrl('my-profile');
  }
 getHomePage(){
   console.log(this.router.url);
if(this.router.url =='new-orders'){
  return 'new-orders'
}
return 'home'
 }
}
