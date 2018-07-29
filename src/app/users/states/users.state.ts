import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GetUsersFailure, GetUsersRequest, GetUsersSuccess } from '../actions/users.actions';
import { GetUsersQuery_getUsers } from '../../../schema-types';
import { UsersService } from '../services/users/users.service';
import { catchError, map, tap } from 'rxjs/operators';
import { StartLoading, StopLoading } from '../../core/state-mgnt/actions/app.actions';

export interface UsersStateModel {
  getUsersLoading: boolean;
  getUsers: GetUsersQuery_getUsers[];
}

@State<UsersStateModel>({
  name: 'users',
  defaults: {
    getUsersLoading: false,
    getUsers: []
  }
})
export class UsersState {
  @Selector()
  static users(state: UsersStateModel) {
    return state.getUsers;
  }

  @Selector()
  static usersLoading(state: UsersStateModel) {
    return state.getUsersLoading;
  }

  constructor(
    private readonly usersService: UsersService
  ) {
  }

  @Action(GetUsersRequest)
  getUsersRequest({patchState, dispatch}: StateContext<UsersStateModel>, action: GetUsersRequest) {
    patchState({getUsersLoading: true});
    dispatch(new StartLoading('getUsers'));

    return this.usersService.getUsers().pipe(
      tap((users) => {
        patchState({getUsers: users.data.getUsers});
      }),
      map(() => dispatch(new GetUsersSuccess())),
      catchError((error) => dispatch(new GetUsersFailure(error)))
    );
  }

  @Action(GetUsersSuccess)
  getUsersSuccess({patchState, dispatch}: StateContext<UsersStateModel>, action: GetUsersSuccess) {
    patchState({getUsersLoading: false});
    dispatch(new StopLoading('getUsers'));
  }

  @Action(GetUsersFailure)
  getUsersFailure({patchState, dispatch}: StateContext<UsersStateModel>, action: GetUsersFailure) {
    patchState({getUsersLoading: false});
    dispatch(new StopLoading('getUsers'));
  }
}
