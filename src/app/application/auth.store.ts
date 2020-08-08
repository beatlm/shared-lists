import { Store, StoreConfig } from '@datorama/akita';

export interface AuthState {
  name: string;
  email: string;

}

export function createInitialState(): AuthState {
  return {
    name: '',
    email: ''
  };
}

@StoreConfig({ name: 'auth' ,resettable: false})
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialState());
  }
}
