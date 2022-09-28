import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { toast } from 'react-toastify';

import { isDarkModeVar } from './reactiveVars/darkModeVars';
import typeDefs from './typeDefs.gql';

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_GRAPHQL_ENDPOINT}`,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      toast(`GraphQL error. Message: ${message}, Location: ${locations}, Path: ${path}`),
    );

  if (networkError) toast(`Network error: ${networkError}`);
});

export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isDarkMode: {
            read() {
              return isDarkModeVar();
            },
          },
        },
      },
    },
  }),
  link: from([errorLink, httpLink]),
  typeDefs: typeDefs,
});
