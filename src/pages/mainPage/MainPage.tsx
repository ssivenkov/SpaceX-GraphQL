import React from 'react';

import Launch from 'common/assets/images/launch.jpeg';
import Ship from 'common/assets/images/ship.jpeg';
import SpaceXLogo from 'common/assets/images/SpaceXLogo.jpeg';
import { PATH } from 'types/enum/Path';

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
        <Link image={SpaceXLogo} title='Company' to={PATH.COMPANY} />
        <Link image={Launch} title='Launches' to={PATH.LAUNCHES} />
        <Link image={Ship} title='Ships' to={PATH.SHIPS} />
      </LinksContainer>
    </Container>
  );
};
