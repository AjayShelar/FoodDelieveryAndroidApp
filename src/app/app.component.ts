import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import {
  Platform,
  NavController
} from '@ionic/angular';
import {
  SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
  StatusBar
} from '@ionic-native/status-bar/ngx';

import {
  TranslateService
} from '@ngx-translate/core';
import {
  MyEvent
} from 'src/services/myevent.services';
import {
  Constants
} from 'src/models/contants.models';
import {
  APP_CONFIG,
  AppConfig
} from './app.config';
import {
  NewOrdersPage
} from './new-orders/new-orders.page';
import {
  menuItems
} from '../assets/data/menu-items';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'

import {
  LoadingController
} from '@ionic/angular';
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
      iconName: 'list',
      displayText: 'Food & Beverages',
      expanded: false,
      hasChild: true,
      subOptions: [{
          iconName: 'card',
          displayText: 'Chinese',
          url: '/list'
        },
        {
          iconName: 'cash',
          displayText: 'Continental',
          url: '/list1'
        },
        {
          iconName: 'clock',
          displayText: 'Thai',
          url: '/list2'
        },
        {
          iconName: 'clock',
          displayText: 'Italian',
          url: '/list3'
        },
        {
          iconName: 'clock',
          displayText: 'Snacks',
          url: '/list4'
        },
        {
          iconName: 'clock',
          displayText: 'South Indian',
          url: '/list5'
        },
        {
          iconName: 'clock',
          displayText: 'Rajasthani',
          url: '/list6'
        },
      ]
    },
    {
      iconName: 'flame',
      displayText: 'Handcrafted Products',
      expanded: false,
      hasChild: true,
      subOptions: [{
          iconName: 'flask',
          displayText: 'Textile products',
          url: '/item'
        },
        {
          iconName: 'headset',
          displayText: 'Leather products',
          url: '/item'
        },
        {
          iconName: 'infinite',
          displayText: 'Wooden products',
          url: '/item'
        },
        {
          iconName: 'leaf',
          displayText: 'Metal products',
          url: '/item'
        },
        {
          iconName: 'medal',
          displayText: 'Stone products',
          url: '/item'
        },
        {
          iconName: 'medical',
          displayText: 'Paper/canvas',
          url: '/item'
        },
        {
          iconName: 'nuclear',
          displayText: 'Others',
          url: '/item'
        }
      ]
    },
    {
      iconName: 'radio-button-on',
      displayText: 'Farm Fresh',
      expanded: false,
      hasChild: true,
      subOptions: [{
          iconName: 'map',
          displayText: 'Vegetables',
          url: '/list-sliding'
        },
        {
          iconName: 'magnet',
          displayText: 'Fruits',
          url: '/list-reorder'
        },

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
  public appPages = [{
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

  // Sets initial value to true to show loading spinner on first load
  loading = true;
  showSideMenu = false;
  constructor(
    @Inject(APP_CONFIG) public config: AppConfig,
    private platform: Platform, 
    private navCtrl: NavController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,

    private translate: TranslateService, private myEvent: MyEvent,
    public router: Router,
    public loadingController: LoadingController,
    private socialSharing: SocialSharing

  ) {

    this.initializeApp();
    this.myEvent.getLanguageObservable().subscribe(value => {
      this.navCtrl.navigateRoot(['./']);
      this.globalize(value);
    });
    this.mode = 'buyer';
    localStorage.setItem('mode', JSON.stringify({
      mode: 'buyer'
    }));
    // let loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    // if (loggedIn) {
    //   this.router.navigateByUrl('app-modes');

    // } else {
    //   this.router.navigateByUrl('sign-up');
    // }
    if (['/home', '/my-profile', '/wishlist', '/seller'].includes(this.router.url)) {
      this.show = false;
    }

    this.router.events.subscribe((e: RouterEvent) => {
      this.navigationInterceptor(e);
    })
  }
  navigationInterceptor(event: RouterEvent): void {
    let currentURL = window.location.href;
    console.log(this.router.url);
    if (['/home', '/seller-home', ].includes(this.router.url)) {
      this.showSideMenu = true;
      if (this.router.url === '/seller-home') {
        this.pageList = [];

      }
    } else {
      this.showSideMenu = false;

    }
    if (event instanceof NavigationStart) {
      this.loading = true;
      this.presentLoading();

    }
    if (event instanceof NavigationEnd) {

      this.loading = false
      this.presentLoading();

    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false
      this.presentLoading();

    }
    if (event instanceof NavigationError) {
      this.loading = false
      this.presentLoading();

    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const {
      role,
      data
    } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
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

  isLevel1Shown(i) {
    return false;
  }
  toggleLevel1(i) {
    return
  }
  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.list_header.toLowerCase() === path.toLowerCase());
    }
  }
  toggle(event) {
    console.log(event);
    this.splashScreen.show();
    //  document.location.href = 'index.html';

    if (event.detail['checked']) {
      this.router.navigateByUrl('new-orders');

      this.mode = 'seller';
      localStorage.setItem('mode', JSON.stringify({
        mode: 'seller'
      }));
      var initialHref = window.location.href;
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
      this.globalize(defaultLang);

    } else {

      this.router.navigateByUrl('/');
      this.mode = 'buyer';
      localStorage.setItem('mode', JSON.stringify({
        mode: 'buyer'
      }));
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
      this.globalize(defaultLang);


    }
  }

  profile() {
    this.router.navigateByUrl('my-profile');
  }
  getHomePage() {
    console.log(this.router.url);
    if (this.router.url == 'new-orders') {
      return 'new-orders'
    }
    return 'home'
  }
  goBack() {
    // this.navCtrl.back();
    // this.navCtrl.navigateRoot('app-modes');
    this.router.navigateByUrl('/app-modes');


    }
  navigate(page) {
    switch (page) {
      case 'modes':
        
        this.navCtrl.navigateRoot('app-modes');
        // navigateByUrl('app-modes', { skipLocationChange: true });
        break;
      case 'homepage':
        this.router.navigateByUrl('home', { skipLocationChange: true });

        break;
      case 'sellers':
        this.router.navigateByUrl('sellers');
        break;
      case 'sell':
        this.router.navigateByUrl('seller-home');
        break;
      case 'account':
        this.router.navigateByUrl('account');
        break;
      default:
        break;
    }
  }

  share(){


    // Check if sharing via email is supported
    // this.socialSharing.share().then(() => {
    //   // Sharing via email is possible
    // }).catch(() => {
    //   // Sharing via email is not possible
    // });
    
    // Share via email
    this.socialSharing.share('Message and subject', 'The subject').then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
      }
}