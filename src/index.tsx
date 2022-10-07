import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { client } from 'apollo/client';
import { initializeApp } from 'firebase/app';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { App } from './App';
import { GlobalAppStyles, GlobalNullStyles } from './globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEI,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

initializeApp(firebaseConfig);

root.render(
  <HashRouter>
    <ApolloProvider client={client}>
      <GlobalNullStyles />
      <GlobalAppStyles />
      <App />
    </ApolloProvider>
  </HashRouter>,
);
