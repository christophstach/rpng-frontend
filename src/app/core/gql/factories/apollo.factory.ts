import { InMemoryCache } from 'apollo-cache-inmemory';
import { Store } from '@ngxs/store';
import { HttpLink } from 'apollo-angular-link-http';
import { GraphQLError } from 'graphql';
import { AuthStateModel } from '../../../auth/states/auth.state';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { environment } from '../../../../environments/environment';
import { MessageService } from '../../utility/services/message.service';

export function createApollo(httpLink: HttpLink, store: Store, messageService: MessageService) {


  const link = ApolloLink.from([
    // Auth Link
    new ApolloLink((operation, forward) => {
      const jwt = store.snapshot().auth ? (store.snapshot().auth as AuthStateModel).jwt : null;

      if (jwt) {
        operation.setContext({
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        });
      }

      return forward(operation);
    }),
    // Error Link
    onError(({graphQLErrors, networkError}) => {
      if (graphQLErrors) {
        graphQLErrors.map((e: GraphQLError) => {
          if (typeof(e.message) === 'string') {
            messageService.error(e.message);
          } else {
            const {message, error, statusCode} = e.message as any;
            messageService.error(message, error);
          }
        });
      }

      if (networkError) {
        messageService.error(
          networkError.message,
          'Network error'
        );
      }
    }),
    // Http Link
    httpLink.create({uri: environment.graphqlEndpoint})
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
