import React, { useEffect, useState } from 'react';

import { PastLaunchesQuery, usePastLaunchesLazyQuery } from 'apollo/generated/schema';
import { CardsContainer } from 'common/components/cardsContainer/cardsContainer';
import ListItemCard from 'common/components/listItemCard/ListItemCard';
import { Loader } from 'common/components/loader/Loader';
import { LoaderContainer } from 'common/components/loader/LoaderContainer';
import { Container, PageContainer } from 'common/components/pageContainer/pageContainer';
import { PageTitle } from 'common/components/pageTitle/pageTitle';
import { useInView } from 'react-cool-inview';
import { PATH } from 'types/enum/Path';

export const LaunchesPageInfiniteScroll = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [items, setItems] = useState<PastLaunchesQuery['launchesPast']>([]);

  const limit = 16;
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
        {items?.map((item, index, array) => {
          const isLastElement = index === array.length - 1;

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
              ref={isLastElement ? observe : null}
            />
          );
        })}
        {loading && <Loader />}
      </CardsContainer>
    </PageContainer>
  );
};
