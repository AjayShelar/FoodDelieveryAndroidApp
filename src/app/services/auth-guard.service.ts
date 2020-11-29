import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    // const loggedIn = false; // replace with actual user auth checking logic
 let loggedIn = JSON.parse(localStorage.getItem('loggedIn'));

    if (!loggedIn) {
      // this.router.navigateByUrl('/sign-up');
      // this.router.navigateByUrl('/app-modes');
      return true;


    }else{
      // this.router.navigateByUrl('/app-modes');
return true
    }

    // return loggedIn;
  }
}
