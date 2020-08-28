import { Query } from '@datorama/akita';
import { AuthStore } from './auth.store';
import { AuthState } from './auth.state';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class AuthQuery extends Query<AuthState> {
  allState$ = this.select();
  name$ = this.select((state) => {
    state.name;
  });
  isLoggedIn$ = this.select((state) => !!state.uid);

  constructor(protected store: AuthStore) {
    super(store);
  }
}
