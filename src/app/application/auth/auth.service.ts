import { AuthDataService } from './auth-data.service';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })

export class AuthService {
  constructor(private authDataService:AuthDataService) {}

  logout(): Promise<void> {
    return this.authDataService.logout();
  }

  login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.authDataService.login(email, password);
  }

  register(email: string, password: string) {
    return this.authDataService.register(email, password);
  }

}
