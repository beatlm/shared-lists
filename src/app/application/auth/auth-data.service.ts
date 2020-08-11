import { Injectable } from '@angular/core';
import { AuthStore } from './auth.store';
import { AuthState } from './auth.state';
import { FireAuthService, CollectionConfig } from 'akita-ng-fire';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'users' })
export class AuthDataService extends FireAuthService<AuthState> {
  // formatFromFirestore = createProfile;

  constructor(store: AuthStore) {
    super(store);
  }

  logout(): Promise<void> {
    return super.signOut();
  }

  login(email: string, password: string) {
    return this.signin(email, password);
  }

  register(email: string, password: string, displayName: string) {
    return this.signup(email, password);
  }

  callbackSignin(email: string, password: string, displayName: string) {
    return this.signin(email, password);
  }

  updateProfile(displayName: string) {
    return this.update({ displayName });
  }
}
