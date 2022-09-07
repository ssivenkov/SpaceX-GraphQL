import React from 'react';

import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Navigation } from './navigation/Navigation';
import { AppContainer, ContentContainer } from './styles';

export const App = () => {
  return (
    <AppContainer>
      <Header />
      <ContentContainer>
        <Navigation />
      </ContentContainer>
      <Footer />
    </AppContainer>
  );
};
