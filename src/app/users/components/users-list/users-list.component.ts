import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import gql from 'graphql-tag';
import { UserListComponentQuery } from '../../../schema';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {
  private querySubscription: Subscription;

  users: any[];
  loading: boolean;

  constructor(private readonly apollo: Apollo) {
  }

  ngOnInit() {
    this.loading = true;
    this.querySubscription = this.apollo.watchQuery<UserListComponentQuery>({
      query: gql`
        query UserListComponentQuery {
          users {
            id
            username
            email
            roles
            firstName
            lastName
          }
        }
      `
    })
    .valueChanges
    .pipe(delay(1000))
    .subscribe(({data, loading}) => {
      this.loading = loading;
      this.users = data.users;
    });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
