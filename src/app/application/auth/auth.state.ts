import { FireAuthState } from 'akita-ng-fire';

export interface Profile {
  displayName: string;
  photoURL: string;
}

export interface AuthState extends FireAuthState<Profile> {
}



// export class AuthState implements FireAuthState<Profile> {
//   constructor(public uid: string, public profile: Profile, public loading: boolean) {}
// }
