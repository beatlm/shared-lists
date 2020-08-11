import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { AuthState, initializeAuthState } from './auth.state';


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' ,resettable: false})
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(initializeAuthState());
  }
}
