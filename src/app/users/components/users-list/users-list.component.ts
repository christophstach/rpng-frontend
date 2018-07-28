import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { UserList } from '../../../../schema-types';
import gql from 'graphql-tag';


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
    this.querySubscription = this.apollo.watchQuery<UserList>({
      query: gql`
        query UserList {
          getUsers {
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
    .subscribe(({data, loading}) => {
      this.loading = loading;
      this.users = data.getUsers;
    });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
