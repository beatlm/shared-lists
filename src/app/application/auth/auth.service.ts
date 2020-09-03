import { AuthState } from './auth.state';
import { Injectable } from '@angular/core';
import { AuthStore } from './auth.store';
import { FireAuthService, CollectionConfig } from 'akita-ng-fire';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'users' })
export class AuthService extends FireAuthService<AuthState> {
  //formatFromFirestore = createProfile;

  constructor(store: AuthStore) {
    super(store);
  }
  register(email: string, password: string, alias: string) {
    this.signup(email, password).then((res) => {
      this.signin(email, password).then((res) => {
       return this.updateProfile(alias);
      });
    });
  }

  updateProfile(displayName: string) {
    return this.update({ displayName });
  }
  /* logout(): Promise<void> {
    return this.authDataService.logout();
  }

  login(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    //this.store.update({ uid: email });
    //  this.store.update({email:email});
    return this.authDataService.login(email, password);
  }

  register(email: string, password: string) {
    return this.authDataService.register(email, password);
  }

  callbackSignin(email: string, password: string, displayName: string) {
    return this.authDataService.callbackSignin(email, password, displayName);
  }
  updateProfile(displayName: string) {
    return this.authDataService.updateProfile(displayName);
  }*/
}
