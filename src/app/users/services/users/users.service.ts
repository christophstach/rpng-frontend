import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GetUsersQuery } from '../../../schema';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly apollo: Apollo) {
  }

  getUsers() {
    return this.apollo.query<GetUsersQuery>({
      query: gql`
        query getUsersQuery {
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
