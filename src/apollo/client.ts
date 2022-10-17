import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { toast } from 'react-toastify';

import { isDarkModeVar } from './reactiveVars/darkModeVars';
import typeDefs from './typeDefs.gql';

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_GRAPHQL_ENDPOINT}`,
});

const timeLink = new ApolloLink((operation, forward) => {
  operation.setContext({ start: new Date() });

  return forward(operation).map((data) => {
    // called after server responds
    /* const time = +new Date() - operation.getContext().start;

    console.log(`Operation ${operation.operationName} took ${time}ms to complete`);*/

    return data;
  });
});

const postRetryLink = new ApolloLink((operation, forward) => {
  /* const time = +new Date() - operation.getContext().start;

  console.log(
    `client-server lap for ${operation.operationName}: ${time}ms difference between operation context time and 'postRetryLink' execution time`,
  );*/

  return forward(operation).map((data) => {
    // called after server responds
    /* const time = +new Date() - operation.getContext().start;

    console.log(
      `server-client lap for ${operation.operationName}: ${time}ms difference between operation context time and 'postRetryLink' execution time`,
    );*/

    return data;
  });
});

const retryLink = new RetryLink({
  delay: { initial: 150, max: Infinity, jitter: true },
  attempts: {
    max: 5,
    retryIf: (error) => !!error,
  },
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      toast(`GraphQL error. Message: ${message}, Location: ${locations}, Path: ${path}`),
    );

  if (networkError) toast(`Network error: ${networkError}`);
}).split(
  (operation) => {
    return +new Date() - operation.getContext().start > 0;
  },
  retryLink.concat(postRetryLink.concat(httpLink)),
  retryLink.concat(postRetryLink.concat(httpLink)),
);

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
  defaultOptions: {
    mutate: { errorPolicy: 'all' },
    query: { errorPolicy: 'all' },
    watchQuery: { errorPolicy: 'all' },
  },
  link: from([timeLink, errorLink]),
  typeDefs: typeDefs,
});
