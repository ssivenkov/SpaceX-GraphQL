import React from 'react';

import { useShipsQuery } from 'apollo/generated/schema';
import { CardsContainer } from 'common/components/cardsContainer/cardsContainer';
import { Container } from 'common/components/pageContainer/pageContainer';
import { PageTitle } from 'common/components/pageTitle/pageTitle';

import { ShipCard } from './shipCard/ShipCard';

export const ShipsPage = () => {
  const { loading, error, data } = useShipsQuery();

  if (error) {
    return <Container>{error.message}</Container>;
  }

  if (loading) {
    return <Container>loading</Container>;
  }

  return (
    <Container>
      <PageTitle>Ships</PageTitle>
      <CardsContainer>
        {data?.ships?.map((item) => {
          return <ShipCard image={item?.image} key={item?.id} name={item?.name} />;
        })}
      </CardsContainer>
    </Container>
  );
};
