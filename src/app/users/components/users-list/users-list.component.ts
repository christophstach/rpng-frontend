import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetUsersQuery_getUsers } from '../../../../schema-types';
import { Store } from '@ngxs/store';
import { GetUsersRequest } from '../../actions/users.actions';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users$: Observable<GetUsersQuery_getUsers[]>;
  loading$: Observable<boolean>;

  constructor(private readonly store: Store) {
    this.loading$ = this.store.select(state => state.users.getUsersLoading);
    this.users$ = this.store.select(state => state.users.getUsers);
  }

  ngOnInit() {
    this.store.dispatch(new GetUsersRequest());
  }
}
