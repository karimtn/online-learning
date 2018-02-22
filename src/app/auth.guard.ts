import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthService } from '../app/auth.service';


// for more documentation use this link https://angular.io/guide/router#guards
@Injectable()
export class AuthGuard implements CanActivate {

  redirectUrl;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {

    if (this.authService.isLoggedIn()) {

      return true;
    } else {
      this.redirectUrl = state.url;
      this.router.navigate(['/login']);
      return false;
    }


  }
}
