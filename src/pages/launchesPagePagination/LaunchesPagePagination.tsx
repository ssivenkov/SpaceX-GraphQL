import React from 'react';

import { useLastPastLaunchQuery, usePastLaunchesQuery } from 'apollo/generated/schema';
import { CardsContainer } from 'common/components/cardsContainer/cardsContainer';
import ListItemCard from 'common/components/listItemCard/ListItemCard';
import { Loader } from 'common/components/loader/Loader';
import { LoaderContainer } from 'common/components/loader/LoaderContainer';
import { PageContainer } from 'common/components/pageContainer/pageContainer';
import { PageTitle } from 'common/components/pageTitle/pageTitle';
import { Pagination } from 'common/components/pagination/Pagination';
import { LAUNCHES, NOTIFICATION_TIMEOUT } from 'common/constants/constants';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
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
  });

  const { data: lastPastLaunchData } = useLastPastLaunchQuery();

  const lastPastLaunch =
    lastPastLaunchData?.launchesPast && Number(lastPastLaunchData?.launchesPast[0]?.id);

  if (loading) {
    return (
      <PageContainer>
        <ToastContainer autoClose={NOTIFICATION_TIMEOUT} />
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <ToastContainer autoClose={NOTIFICATION_TIMEOUT} />
        <div>{error.message}</div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <ToastContainer autoClose={NOTIFICATION_TIMEOUT} />
      <PageTitle>Launches</PageTitle>
      <CardsContainer>
        {data?.launchesPast?.map((item) => {
          return (
            <ListItemCard
              id={item?.id}
              image={
                item?.links?.flickr_images && item?.links?.flickr_images?.length > 0
                  ? item?.links?.flickr_images[0]
                  : item?.links?.mission_patch
              }
              key={item?.id}
              linkTo={`../../${PATH.LAUNCHES}/${item?.id}`}
              name={item?.mission_name}
              sectionType={LAUNCHES}
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
