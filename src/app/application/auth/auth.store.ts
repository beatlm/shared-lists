import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { AuthState } from './auth.state';
import { initialAuthState } from 'akita-ng-fire';


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(initialAuthState);
  }
}
