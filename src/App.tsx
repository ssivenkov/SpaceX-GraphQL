import React from 'react';

import { Header } from './components/header/Header';
import { Navigation } from './navigation/Navigation';
import { AppContainer } from './styles';

export const App = () => {
  return (
    <AppContainer>
      <Header />
      <Navigation />
    </AppContainer>
  );
};
