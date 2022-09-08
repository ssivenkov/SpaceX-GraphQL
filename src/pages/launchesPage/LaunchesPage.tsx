import React from 'react';

import { usePastLaunchesListQuery } from 'apollo/generated/schema';
import { CardsContainer } from 'common/components/cardsContainer/cardsContainer';
import { ListItemCard } from 'common/components/listItemCard/ListItemCard';
import { Container } from 'common/components/pageContainer/pageContainer';
import { PageTitle } from 'common/components/pageTitle/pageTitle';

export const LaunchesPage = () => {
  const limit = 16;
  const offset = 1;

  const { loading, error, data } = usePastLaunchesListQuery({
    variables: {
      limit,
      offset,
    },
  });

  if (error) {
    return <Container>{error.message}</Container>;
  }

  if (loading) {
    return <Container>loading</Container>;
  }

  return (
    <Container>
      <PageTitle>Launches</PageTitle>
      <CardsContainer>
        {data?.launchesPast?.map((item) => {
          return (
            <ListItemCard
              image={
                item?.links?.flickr_images && item?.links?.flickr_images?.length > 0
                  ? item?.links?.flickr_images[0]
                  : item?.links?.mission_patch
              }
              key={item?.id}
              name={item?.mission_name}
            />
          );
        })}
      </CardsContainer>
    </Container>
  );
};
