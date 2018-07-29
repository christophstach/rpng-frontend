import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetUsersQuery_getUsers } from '../../../../schema-types';
import { Select, Store } from '@ngxs/store';
import { GetUsersRequest } from '../../actions/users.actions';
import { UsersState } from '../../states/users.state';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Select(UsersState.users)
  users$: Observable<GetUsersQuery_getUsers[]>;

  @Select(UsersState.usersLoading)
  loading$: Observable<boolean>;

  constructor(private readonly store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new GetUsersRequest());
  }
}
