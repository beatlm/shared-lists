import { FireAuthState } from 'akita-ng-fire';

export interface Profile {
  displayName: string;
  email: string;
  uid: string;
}

export interface AuthState extends FireAuthState<Profile> {
  uid: string;
  profile: Profile;
  loading: boolean;
  emailVerified: boolean;
}
export function initializeAuthState(): AuthState {
  return {
    uid: null,
    emailVerified: false,
    profile: {
      displayName: null,
      email: null,
      uid: null
    },
    loading: false,

  };
}

// export class AuthState implements FireAuthState<Profile> {
//   constructor(public uid: string, public profile: Profile, public loading: boolean) {}
// }
