import React, { useEffect, useState } from 'react';

import { PastLaunchesQuery, usePastLaunchesLazyQuery } from 'apollo/generated/schema';
import { CardsContainer } from 'common/components/cardsContainer/cardsContainer';
import ListItemCard from 'common/components/listItemCard/ListItemCard';
import { Loader } from 'common/components/loader/Loader';
import { LoaderContainer } from 'common/components/loader/LoaderContainer';
import { PageContainer } from 'common/components/pageContainer/pageContainer';
import { PageTitle } from 'common/components/pageTitle/pageTitle';
import { LAUNCHES, NOTIFICATION_TIMEOUT } from 'common/constants/constants';
import { useInView } from 'react-cool-inview';
import { ToastContainer } from 'react-toastify';
import { PATH } from 'types/enum/Path';

export const LaunchesPageInfiniteScroll = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [items, setItems] = useState<PastLaunchesQuery['launchesPast']>([]);

  const limit = 12;
  const offset = items?.length;

  const [launchesQuery, { loading, error }] = usePastLaunchesLazyQuery();

  const loadMoreLaunches = () => {
    launchesQuery({
      variables: {
        limit,
        offset,
      },
      fetchPolicy: 'network-only',
      nextFetchPolicy: 'cache-first',
    }).then((res) => {
      if (items !== null && items !== undefined && res.data && res.data.launchesPast) {
        setItems([...items, ...res.data.launchesPast]);
      }
    });
  };

  const { observe } = useInView({
    // For better UX, we can grow the root margin so the data will be loaded earlier
    rootMargin: '50px 0px',
    // When the last item comes to the viewport
    onEnter: ({ unobserve }) => {
      unobserve(); // Pause observe when loading data
      setCurrentPage((prevState) => prevState + 1);
    },
  });

  useEffect(() => {
    loadMoreLaunches();
  }, [currentPage]);

  if (loading && items?.length === 0) {
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
        {items?.map((item, index, array) => {
          const isLastElement = index === array.length - 1;

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
              ref={isLastElement ? observe : null}
              sectionType={LAUNCHES}
            />
          );
        })}
      </CardsContainer>
      {loading && <Loader />}
    </PageContainer>
  );
};
