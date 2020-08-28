import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthQuery } from './auth.query';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authQuery: AuthQuery) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authQuery.isLoggedIn$.pipe(
      first(),
      map((isLoggedIn) => {
        if (isLoggedIn) {
          console.log('esta autenticado');
          return true;
        }
        console.log('No está autenticado');
        this.router.navigate(['/']);
        return false;
      })
    );
  }
}
