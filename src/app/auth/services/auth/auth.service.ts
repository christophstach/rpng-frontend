import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { LoginMutation, RegisterMutation, VerifyEmailMutation } from '../../../schema';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly apollo: Apollo) {
  }

  login({email, password}): Observable<string> {
    return this.apollo.mutate<LoginMutation>({
      mutation: gql`
        mutation {
          login(
            email: "${email}"
            password: "${password}"
          )
        }
      `
    }).pipe(
      map(response => response.data.login)
    );
  }

  register({email, username, password, passwordRepeated, firstName, lastName}) {
    return this.apollo.mutate<RegisterMutation>({
      mutation: gql`
        mutation {
          register(
            email: "${email}"
            username: "${username}"
            password: "${password}"
            passwordRepeated: "${passwordRepeated}"
            firstName: "${firstName}"
            lastName: "${lastName}"
          ) {
            id
            username
            email
            roles
            firstName
            lastName
          }
        }
      `
    });
  }

  verifyEmail(token) {
    return this.apollo.mutate<VerifyEmailMutation>({
      mutation: gql`
        mutation VerifyEmailMutation {
          verifyEmail(token: "${token}") {
            email
            firstName
            lastName
          }
        }
      `
    });
  }
}
