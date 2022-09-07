import React from 'react';

import { PATH } from 'enum/Path';
import { Link } from 'react-router-dom';

import { Container, WelcomeContainer, WelcomeDescription, WelcomeTitle } from './styles';

export const MainPage = () => {
  return (
    <Container>
      <WelcomeContainer>
        <WelcomeTitle>Welcome to SpaceX Info</WelcomeTitle>
        <WelcomeDescription>What would you like to know about?</WelcomeDescription>
      </WelcomeContainer>
      <Link to={PATH.COMPANY}>Company</Link>
      <Link to={PATH.SHIPS}>Ships</Link>
    </Container>
  );
};
