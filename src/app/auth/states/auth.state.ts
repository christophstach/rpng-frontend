import { Action, NgxsOnInit, State, StateContext } from '@ngxs/store';
import {
  LoginFailure,
  LoginRequest,
  LoginSuccess,
  Logout,
  RegisterFailure,
  RegisterRequest,
  RegisterSuccess
} from '../actions/auth.actions';
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
  loginLoading: boolean;
  registerLoading: boolean;
  jwt: string;
  jwtPayload: JwtPayload;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    loginLoading: false,
    registerLoading: false,
    jwt: null,
    jwtPayload: null
  }
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
  loginRequest({patchState, dispatch}: StateContext<AuthStateModel>, action: LoginRequest) {
    const {email, password} = action;
    patchState({loginLoading: true});

    return this.authService.login({email, password}).pipe(
      tap((token) => {
        patchState({
          jwt: token,
          jwtPayload: this.jwtHelperService.decodeToken(token),
        });
      }),
      map(() => dispatch(new LoginSuccess())),
      catchError((error) => dispatch(new LoginFailure(error)))
    );
  }

  @Action(RegisterRequest)
  registerRequest({patchState, dispatch}: StateContext<AuthStateModel>, action: RegisterRequest) {
    const {email, username, password, passwordRepeated, firstName, lastName} = action;
    patchState({registerLoading: true});

    return this.authService.register({email, username, password, passwordRepeated, firstName, lastName}).pipe(
      map(() => dispatch(new RegisterSuccess())),
      catchError((error) => dispatch(new RegisterFailure(error)))
    );
  }

  @Action(LoginSuccess)
  async loginSuccess({dispatch, patchState}: StateContext<AuthStateModel>, action: LoginSuccess) {
    dispatch(new Navigate(['/profile']));
    await this.apollo.getClient().resetStore();
    patchState({loginLoading: false});

    this.messageService.success('Login successful');
  }

  @Action(RegisterSuccess)
  async registerSuccess({dispatch, patchState}: StateContext<AuthStateModel>, action: RegisterSuccess) {
    dispatch(new Navigate(['/login']));
    patchState({registerLoading: false});

    this.messageService.success('Registration successful');
  }

  @Action(LoginFailure)
  async loginFailed({patchState}: StateContext<AuthStateModel>, action: LoginFailure) {
    await this.apollo.getClient().resetStore();
    patchState({loginLoading: false});
  }

  @Action(RegisterFailure)
  async registerFailed({patchState}: StateContext<AuthStateModel>, action: RegisterFailure) {
    patchState({registerLoading: false});
  }

  @Action(Logout)
  async logout({patchState, dispatch}: StateContext<AuthStateModel>) {
    dispatch(new Navigate(['/login']));
    await this.apollo.getClient().resetStore();
    patchState({jwt: null, jwtPayload: null});

    this.messageService.success('Logout successful');
  }
}
