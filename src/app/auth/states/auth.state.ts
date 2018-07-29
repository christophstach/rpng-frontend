import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';
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
import { StartLoading, StopLoading } from '../../core/state-mgnt/actions/app.actions';

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
  @Selector()
  static loginLoading(state: AuthStateModel) {
    return state.loginLoading;
  }

  @Selector()
  static registerLoading(state: AuthStateModel) {
    return state.registerLoading;
  }

  @Selector()
  static jwt(state: AuthStateModel) {
    return state.jwt;
  }

  @Selector()
  static jwtPayload(state: AuthStateModel) {
    return state.jwtPayload;
  }

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
    dispatch(new StartLoading('login'));

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

  @Action(LoginSuccess)
  async loginSuccess({patchState, dispatch}: StateContext<AuthStateModel>, action: LoginSuccess) {
    dispatch(new Navigate(['/profile']));
    await this.apollo.getClient().resetStore();
    patchState({loginLoading: false});
    dispatch(new StopLoading('login'));

    this.messageService.success('Login successful');
  }

  @Action(LoginFailure)
  async loginFailed({patchState, dispatch}: StateContext<AuthStateModel>, action: LoginFailure) {
    await this.apollo.getClient().resetStore();
    patchState({loginLoading: false});
    dispatch(new StopLoading('login'));
  }

  @Action(RegisterRequest)
  registerRequest({patchState, dispatch}: StateContext<AuthStateModel>, action: RegisterRequest) {
    const {email, username, password, passwordRepeated, firstName, lastName} = action;
    patchState({registerLoading: true});
    dispatch(new StartLoading('register'));

    return this.authService.register({email, username, password, passwordRepeated, firstName, lastName}).pipe(
      map(() => dispatch(new RegisterSuccess())),
      catchError((error) => dispatch(new RegisterFailure(error)))
    );
  }

  @Action(RegisterSuccess)
  async registerSuccess({patchState, dispatch}: StateContext<AuthStateModel>, action: RegisterSuccess) {
    dispatch(new Navigate(['/login']));
    patchState({registerLoading: false});
    dispatch(new StopLoading('register'));

    this.messageService.success('Registration successful');
  }

  @Action(RegisterFailure)
  async registerFailed({patchState, dispatch}: StateContext<AuthStateModel>, action: RegisterFailure) {
    patchState({registerLoading: false});
    dispatch(new StopLoading('register'));
  }

  @Action(Logout)
  async logout({patchState, dispatch}: StateContext<AuthStateModel>) {
    dispatch(new Navigate(['/login']));
    await this.apollo.getClient().resetStore();
    patchState({jwt: null, jwtPayload: null});

    this.messageService.success('Logout successful');
  }
}
