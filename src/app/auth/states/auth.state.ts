import { Action, NgxsOnInit, State, StateContext } from '@ngxs/store';
import { LoginFailure, LoginRequest, LoginSuccess, Logout } from '../actions/auth.actions';
import { AuthService } from '../services/auth/auth.service';
import { catchError, map, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Navigate } from '@ngxs/router-plugin';
import { Apollo } from 'apollo-angular';
import { MessageService } from '../../core/utility/services/message.service';

export interface JwtPayload {
  email: string;
  username: string;
  role: 'SUPERADMIN' | 'ADMIN' | 'USER';
}

export interface AuthStateModel {
  jwt: string;
  jwtPayload: JwtPayload;
}

@State<AuthStateModel>({
  name: 'auth'
})
export class AuthState implements NgxsOnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtHelperService: JwtHelperService,
    private readonly messageService: MessageService,
    private readonly apollo: Apollo
  ) {
  }

  ngxsOnInit({patchState, getState}: StateContext<AuthStateModel>) {
    const state = getState();

    if (state.jwt && this.jwtHelperService.isTokenExpired(state.jwt)) {
      patchState({
        jwt: null,
        jwtPayload: null
      });
    }
  }

  @Action(LoginRequest)
  login({patchState, dispatch}: StateContext<AuthStateModel>, action: LoginRequest) {
    return this.authService.login({email: action.email, password: action.password}).pipe(
      tap((token) => {
        patchState({
          jwt: token,
          jwtPayload: this.jwtHelperService.decodeToken(token)
        });
      }),
      map(() => dispatch(new LoginSuccess())),
      catchError((error) => dispatch(new LoginFailure(error)))
    );
  }

  @Action(Logout)
  async logout({patchState, dispatch}: StateContext<AuthStateModel>) {
    dispatch(new Navigate(['/login']));
    patchState({jwt: null, jwtPayload: null});
    await this.apollo.getClient().resetStore();
    this.messageService.success('Logout successful');
  }

  @Action(LoginSuccess)
  async loginSuccess({dispatch}: StateContext<AuthStateModel>, action: LoginSuccess) {
    dispatch(new Navigate(['/profile']));
    await this.apollo.getClient().resetStore();
    this.messageService.success('Login successful');
  }

  @Action(LoginFailure)
  async loginFailed({patchState}: StateContext<AuthStateModel>, action: LoginFailure) {
    patchState({jwt: null, jwtPayload: null});
    await this.apollo.getClient().resetStore();
  }
}
