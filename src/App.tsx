import React from 'react';

import { Footer } from './common/components/footer/Footer';
import { Header } from './common/components/header/Header';
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
