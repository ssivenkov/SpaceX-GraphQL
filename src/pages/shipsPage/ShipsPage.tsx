import React from 'react';

import { useShipsQuery } from 'apollo/generated/schema';
import { CardsContainer } from 'common/components/cardsContainer/cardsContainer';
import ListItemCard from 'common/components/listItemCard/ListItemCard';
import { Loader } from 'common/components/loader/Loader';
import { LoaderContainer } from 'common/components/loader/LoaderContainer';
import { Container, PageContainer } from 'common/components/pageContainer/pageContainer';
import { PageTitle } from 'common/components/pageTitle/pageTitle';

export const ShipsPage = () => {
  const { loading, error, data } = useShipsQuery();

  if (error) {
    return <Container>{error.message}</Container>;
  }

  if (loading) {
    return (
      <PageContainer>
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageTitle>Ships</PageTitle>
      <CardsContainer>
        {data?.ships?.map((item) => {
          return <ListItemCard image={item?.image} key={item?.id} name={item?.name} />;
        })}
      </CardsContainer>
    </PageContainer>
  );
};
