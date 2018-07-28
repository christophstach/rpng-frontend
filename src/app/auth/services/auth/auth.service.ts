import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Login, Register, Verify } from '../../../../schema-types';
import gql from 'graphql-tag';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly apollo: Apollo) {
  }

  login({email, password}): Observable<string> {
    return this.apollo.mutate<Login>({
      mutation: gql`
        mutation Login {
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
    return this.apollo.mutate<Register>({
      mutation: gql`
        mutation Register {
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
    return this.apollo.mutate<Verify>({
      mutation: gql`
        mutation Verify {
          verify(token: "${token}") {
            email
            firstName
            lastName
          }
        }
      `
    });
  }
}
