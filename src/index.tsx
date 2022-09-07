import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { client } from 'apollo/client';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { App } from './App';
import { GlobalAppStyles, GlobalNullStyles } from './globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <ApolloProvider client={client}>
        <GlobalNullStyles />
        <GlobalAppStyles />
        <App />
      </ApolloProvider>
    </HashRouter>
  </React.StrictMode>,
);
