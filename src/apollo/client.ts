import { ApolloClient, InMemoryCache } from '@apollo/client';

import { isDarkModeVar } from './reactiveVars/darkModeVars';
import typeDefs from './typeDefs.gql';

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
  typeDefs: typeDefs,
  uri: `${process.env.REACT_APP_GRAPHQL_ENDPOINT}`,
});
