import React from 'react';

import { PATH } from 'enum/Path';

import { Link } from './link/Link';
import {
  Container,
  LinksContainer,
  WelcomeContainer,
  WelcomeDescription,
  WelcomeTitle,
} from './styles';

export const MainPage = () => {
  return (
    <Container>
      <WelcomeContainer>
        <WelcomeTitle>Welcome to SpaceX Info</WelcomeTitle>
        <WelcomeDescription>What would you like to know about?</WelcomeDescription>
      </WelcomeContainer>
      <LinksContainer>
        <Link title='Company' to={PATH.COMPANY} />
        <Link title='Ships' to={PATH.SHIPS} />
      </LinksContainer>
    </Container>
  );
};
