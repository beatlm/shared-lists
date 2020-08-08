import { AuthStore } from './auth.store';

export class AuthService {
  constructor(private authStore: AuthStore) {}

  updateName(newName: string) {
    this.authStore.update({ name: newName });
  }
}
