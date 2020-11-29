import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',  redirectTo: 'app-modes', pathMatch: 'full'
  },
	
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'notifcations',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'item',
    loadChildren: () => import('./item/item.module').then( m => m.ItemPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'item-detail',
    loadChildren: () => import('./item-detail/item-detail.module').then( m => m.ItemDetailPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module').then( m => m.ReviewsPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'seller',
    loadChildren: () => import('./seller-info/seller-info.module').then( m => m.SellerInfoPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'seller-info',
    loadChildren: () => import('./seller-info/seller-info.module').then( m => m.SellerInfoPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'select-address',
    loadChildren: () => import('./select-address/select-address.module').then( m => m.SelectAddressPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'payment-mode',
    loadChildren: () => import('./payment-mode/payment-mode.module').then( m => m.PaymentModePageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'order-confirm',
    loadChildren: () => import('./order-confirm/order-confirm.module').then( m => m.OrderConfirmPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'add-address',
    loadChildren: () => import('./add-address/add-address.module').then( m => m.AddAddressPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'title',
    loadChildren: () => import('./title/title.module').then( m => m.TitlePageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'my-orders',
    loadChildren: () => import('./my-orders/my-orders.module').then( m => m.MyOrdersPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'add-review',
    loadChildren: () => import('./add-review/add-review.module').then( m => m.AddReviewPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'wishlist',
    loadChildren: () => import('./wishlist/wishlist.module').then( m => m.WishlistPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then( m => m.LanguagePageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'search-result',
    loadChildren: () => import('./search-result/search-result.module').then( m => m.SearchResultPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'location-select',
    loadChildren: () => import('./location-select/location-select.module').then( m => m.LocationSelectPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'new-orders',
    loadChildren: () => import('./new-orders/new-orders.module').then( m => m.NewOrdersPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'new-product',
    loadChildren: () => import('./new-product/new-product.module').then( m => m.NewProductPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'order-info',
    loadChildren: () => import('./order-info/order-info.module').then( m => m.OrderInfoPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'earnings',
    loadChildren: () => import('./earnings/earnings.module').then( m => m.EarningsPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'my-items',
    loadChildren: () => import('./my-items/my-items.module').then( m => m.MyItemsPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'edit-item',
    loadChildren: () => import('./edit-item/edit-item.module').then( m => m.EditItemPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module').then( m => m.ReviewsPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'send-to-bank',
    loadChildren: () => import('./send-to-bank/send-to-bank.module').then( m => m.SendToBankPageModule),
    canActivate: [AuthGuardService]

  },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  // },
  {
    path: 'add-address',
    loadChildren: () => import('./add-address/add-address.module').then( m => m.AddAddressPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'new-product',
    loadChildren: () => import('./new-product/new-product.module').then( m => m.NewProductPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'sellers',
    loadChildren: () => import('./nearby-sellers/nearby-sellers.module').then( m => m.NearbySellersPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'subscribe',
    loadChildren: () => import('./subscribe/subscribe.module').then( m => m.SubscribePageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'app-modes',
    loadChildren: () => import('./app-modes/app-modes.module').then( m => m.AppModesPageModule),
    // canActivate: [AuthGuardService]

  },
  {
    path: 'seller-home',
    loadChildren: () => import('./seller-home/seller-home.module').then( m => m.SellerHomePageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'seller-onboarding',
    loadChildren: () => import('./seller-onboarding/seller-onboarding.module').then( m => m.SellerOnboardingPageModule),
    canActivate: [AuthGuardService]

  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
