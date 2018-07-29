import { Action, Select, State, StateContext } from '@ngxs/store';
import { GetUsersFailure, GetUsersRequest, GetUsersSuccess } from '../actions/users.actions';
import { GetUsersQuery_getUsers } from '../../../schema-types';
import { UsersService } from '../services/users/users.service';
import { catchError, delay, map, tap } from 'rxjs/operators';

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
  @Select()
  static users(state: { users: UsersStateModel }) {
    return state.users.getUsers;
  }

  @Select()
  static usersLoading(state: { users: UsersStateModel }) {
    return state.users.getUsersLoading;
  }

  constructor(
    private readonly usersService: UsersService
  ) {
  }

  @Action(GetUsersRequest)
  getUsersRequest({patchState, dispatch}: StateContext<UsersStateModel>, action: GetUsersRequest) {
    patchState({getUsersLoading: true});

    return this.usersService.getUsers().pipe(
      delay(5000),
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
  }

  @Action(GetUsersFailure)
  getUsersFailure({patchState, dispatch}: StateContext<UsersStateModel>, action: GetUsersFailure) {
    patchState({getUsersLoading: false});
  }
}
