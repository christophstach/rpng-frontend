import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { GetUsersQuery } from '../../../../schema-types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly apollo: Apollo) {
  }

  getUsers() {
    return this.apollo.query<GetUsersQuery>({
      query: gql`
        query GetUsersQuery {
          getUsers {
            id
            email
            username
            roles
            firstName
            lastName
          }
        }
      `
    });
  }
}
