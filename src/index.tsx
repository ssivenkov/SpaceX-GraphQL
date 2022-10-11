import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { client } from 'apollo/client';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { App } from './App';
import { firebaseConfig } from './firebase/firebaseConfig';
import { GlobalAppStyles, GlobalNullStyles } from './globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp);

root.render(
  <HashRouter>
    <ApolloProvider client={client}>
      <GlobalNullStyles />
      <GlobalAppStyles />
      <App />
    </ApolloProvider>
  </HashRouter>,
);
