import { Action, State, StateContext } from '@ngxs/store';
import { GetUsersFailure, GetUsersRequest, GetUsersSuccess } from '../actions/users.actions';
import { GetUsersQuery_getUsers } from '../../../schema-types';
import { UsersService } from '../services/users/users.service';
import { catchError, map, tap } from 'rxjs/operators';

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
  constructor(
    private readonly usersService: UsersService
  ) {
  }

  @Action(GetUsersRequest)
  getUsersRequest({patchState, dispatch}: StateContext<UsersStateModel>, action: GetUsersRequest) {
    patchState({getUsersLoading: true});

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
  }

  @Action(GetUsersFailure)
  getUsersFailure({patchState, dispatch}: StateContext<UsersStateModel>, action: GetUsersFailure) {
    patchState({getUsersLoading: false});
  }
}
