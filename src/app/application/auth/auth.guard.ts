import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthQuery } from './auth.query';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(public afAuth: AngularFireAuth, private router: Router, private authQuery: AuthQuery) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.authQuery.isLoggedIn$.pipe(
      first(),
      map((isLoggedIn) => {
        if (isLoggedIn) {
          return true;
        } else {
          return this.router.parseUrl('login');
        }
      })
    );
  }
}
