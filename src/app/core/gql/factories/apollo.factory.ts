import { InMemoryCache } from 'apollo-cache-inmemory';
import { Store } from '@ngxs/store';
import { HttpLink } from 'apollo-angular-link-http';
import { ToastrService } from 'ngx-toastr';
import { GraphQLError } from 'graphql';
import { AuthStateModel } from '../../../auth/states/auth.state';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { environment } from '../../../../environments/environment';

export function createApollo(httpLink: HttpLink, store: Store, toastr: ToastrService) {
  const http = httpLink.create({uri: environment.graphqlEndpoint});

  const auth = new ApolloLink((operation, forward) => {
    const jwt = store.snapshot().auth ? (store.snapshot().auth as AuthStateModel).jwt : null;

    if (jwt) {
      operation.setContext({
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });
    }

    return forward(operation);
  });

  const error = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) {
      graphQLErrors.map((err: GraphQLError) => {
        const {message} = err;

        toastr.error(message);
      });
    }

    if (networkError) {
      toastr.error(
        networkError.message,
        'Network error'
      );
    }
  });

  const link = ApolloLink.from([
    auth,
    error,
    http
  ]);

  return {
    link: link,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        // fetchPolicy: 'network-only',
        errorPolicy: 'none'
      },
      query: {
        // fetchPolicy: 'network-only',
        errorPolicy: 'none'
      },
      mutate: {
        errorPolicy: 'none'
      }
    }
  };
}
