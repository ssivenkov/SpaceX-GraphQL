import React from 'react';

import {
  useLastPastLaunchQuery,
  usePastLaunchesListQuery,
} from 'apollo/generated/schema';
import {
  CardsContainer,
  PaginationContainer,
} from 'common/components/cardsContainer/cardsContainer';
import ListItemCard from 'common/components/listItemCard/ListItemCard';
import { Loader } from 'common/components/loader/Loader';
import { Container } from 'common/components/pageContainer/pageContainer';
import { PageTitle } from 'common/components/pageTitle/pageTitle';
import { Pagination } from 'common/components/pagination/Pagination';
import { useParams } from 'react-router-dom';

export const LaunchesPagePagination = () => {
  const { launchesPage } = useParams();

  const currentPage = Number(launchesPage);

  const limit = 12;
  const offset = limit * (currentPage - 1);

  const { loading, error, data } = usePastLaunchesListQuery({
    variables: {
      limit,
      offset,
    },
  });

  const { data: lastPastLaunchData } = useLastPastLaunchQuery();

  const lastPastLaunch =
    lastPastLaunchData?.launchesPast && Number(lastPastLaunchData?.launchesPast[0]?.id);

  if (error) {
    return <Container>{error.message}</Container>;
  }

  return (
    <Container>
      <PageTitle>Launches</PageTitle>
      <CardsContainer>
        {loading && <Loader />}
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
      {launchesPage && (
        <PaginationContainer>
          {lastPastLaunch && (
            <Pagination
              currentPage={currentPage}
              itemsPerPageCount={limit}
              totalItemsCount={lastPastLaunch}
              visiblePaginationLinksCount={5}
            />
          )}
        </PaginationContainer>
      )}
    </Container>
  );
};
