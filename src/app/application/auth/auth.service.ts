import { AuthState } from './auth.state';
import { AuthDataService } from './auth-data.service';
import { Injectable } from '@angular/core';
import { AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private authDataService: AuthDataService,
    private store: AuthStore
  ) {}

  logout(): Promise<void> {
    return this.authDataService.logout();
  }

  login(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    this.store.update({ uid: email });
    this.store.update({email:email});
    return this.authDataService.login(email, password);
  }

  register(email: string, password: string) {
    return this.authDataService.register(email, password);
  }
}
