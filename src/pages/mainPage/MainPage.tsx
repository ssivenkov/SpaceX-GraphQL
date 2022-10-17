import React from 'react';

import { usePastLaunchesQuery, useShipsQuery } from 'apollo/generated/schema';
import SpaceXLogo from 'common/assets/images/SpaceXLogo.jpeg';
import { Loader } from 'common/components/loader/Loader';
import { LoaderContainer } from 'common/components/loader/LoaderContainer';
import { PageContainer } from 'common/components/pageContainer/pageContainer';
import { NOTIFICATION_TIMEOUT } from 'common/constants/constants';
import { ToastContainer } from 'react-toastify';
import { PATH } from 'types/enum/Path';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from './link/Link';
import {
  Container,
  LinksContainer,
  WelcomeContainer,
  WelcomeDescription,
  WelcomeTitle,
} from './styles';

export const MainPage = () => {
  const limit = 1;
  const pastLaunchOffset = 6;
  const shipsOffset = 15;

  const {
    loading: pastLaunchesLoading,
    error: pastLaunchesError,
    data: pastLaunchesData,
  } = usePastLaunchesQuery({
    variables: {
      limit,
      offset: pastLaunchOffset,
    },
  });

  const {
    loading: shipsLoading,
    error: shipsError,
    data: shipsData,
  } = useShipsQuery({
    variables: {
      limit,
      offset: shipsOffset,
    },
  });

  const launchImage =
    pastLaunchesData?.launchesPast &&
    pastLaunchesData?.launchesPast[0]?.links?.flickr_images &&
    pastLaunchesData?.launchesPast[0]?.links?.flickr_images[0] !== null
      ? pastLaunchesData?.launchesPast[0]?.links?.flickr_images[0]
      : '';

  const shipImage =
    shipsData?.ships && shipsData?.ships[0]?.image ? shipsData?.ships[0]?.image : '';

  if (pastLaunchesError) {
    return (
      <PageContainer>
        <ToastContainer autoClose={NOTIFICATION_TIMEOUT} />
        <div>{pastLaunchesError.message}</div>
      </PageContainer>
    );
  } else if (shipsError) {
    return (
      <PageContainer>
        <ToastContainer autoClose={NOTIFICATION_TIMEOUT} />
        <div>{shipsError.message}</div>
      </PageContainer>
    );
  }

  if (pastLaunchesLoading || shipsLoading) {
    return (
      <PageContainer>
        <ToastContainer autoClose={NOTIFICATION_TIMEOUT} />
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      </PageContainer>
    );
  }

  return (
    <Container>
      <ToastContainer autoClose={NOTIFICATION_TIMEOUT} />
      <WelcomeContainer>
        <WelcomeTitle>Welcome to SpaceX Info</WelcomeTitle>
        <WelcomeDescription>What would you like to know about?</WelcomeDescription>
      </WelcomeContainer>
      <LinksContainer>
        <Link image={SpaceXLogo} title='Company' to={PATH.COMPANY} />
        <Link image={launchImage} title='Launches Pagination' to={PATH.LAUNCHES_P} />
        <Link
          image={launchImage}
          title='Launches Infinite scroll'
          to={PATH.LAUNCHES_IS}
        />
        <Link image={shipImage} title='Ships' to={PATH.SHIPS} />
      </LinksContainer>
    </Container>
  );
};
