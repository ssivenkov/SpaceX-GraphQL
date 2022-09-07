import React from 'react';

import { useShipsQuery } from 'apollo/generated/schema';

import { ShipCard } from './shipCard/ShipCard';
import { Container, PageTitle, ShipsContainer } from './styles';

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
      <ShipsContainer>
        {data?.ships?.map((item) => {
          return <ShipCard image={item?.image} key={item?.id} name={item?.name} />;
        })}
      </ShipsContainer>
    </Container>
  );
};
