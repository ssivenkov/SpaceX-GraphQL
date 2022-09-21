import React from 'react';

import { useLastPastLaunchQuery, usePastLaunchesQuery } from 'apollo/generated/schema';
import { CardsContainer } from 'common/components/cardsContainer/cardsContainer';
import ListItemCard from 'common/components/listItemCard/ListItemCard';
import { Loader } from 'common/components/loader/Loader';
import { LoaderContainer } from 'common/components/loader/LoaderContainer';
import { Container, PageContainer } from 'common/components/pageContainer/pageContainer';
import { PageTitle } from 'common/components/pageTitle/pageTitle';
import { Pagination } from 'common/components/pagination/Pagination';
import { useParams } from 'react-router-dom';
import { PATH } from 'types/enum/Path';

export const LaunchesPagePagination = () => {
  const { launchesPage } = useParams();

  const currentPage = Number(launchesPage);

  const limit = 12;
  const offset = limit * (currentPage - 1);

  const { loading, error, data } = usePastLaunchesQuery({
    variables: {
      limit,
      offset,
    },
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
  });

  const { data: lastPastLaunchData } = useLastPastLaunchQuery();

  const lastPastLaunch =
    lastPastLaunchData?.launchesPast && Number(lastPastLaunchData?.launchesPast[0]?.id);

  if (loading) {
    return (
      <PageContainer>
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      </PageContainer>
    );
  }

  if (error) {
    return <Container>{error.message}</Container>;
  }

  return (
    <PageContainer>
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
              linkTo={`../../${PATH.LAUNCHES}/${item?.id}`}
              name={item?.mission_name}
            />
          );
        })}
      </CardsContainer>
      {launchesPage && lastPastLaunch && (
        <Pagination
          currentPage={currentPage}
          itemsPerPageCount={limit}
          totalItemsCount={lastPastLaunch}
          visiblePaginationLinksCount={5}
        />
      )}
    </PageContainer>
  );
};
