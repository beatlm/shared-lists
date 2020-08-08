import { Query } from '@datorama/akita';
import { AuthStore, AuthState } from './auth.store';

export class AuthQuery extends Query<AuthState> {
  allState$ = this.select();
  name$ = this.select((state) => {
    state.name;
  });

  constructor(protected store: AuthStore) {
    super(store);
  }
}
