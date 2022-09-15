import React, { useEffect, useState } from 'react';

import {
  PastLaunchesListQuery,
  usePastLaunchesListLazyQuery,
} from 'apollo/generated/schema';
import { CardsContainer } from 'common/components/cardsContainer/cardsContainer';
import ListItemCard from 'common/components/listItemCard/ListItemCard';
import { Loader } from 'common/components/loader/Loader';
import { Container } from 'common/components/pageContainer/pageContainer';
import { PageTitle } from 'common/components/pageTitle/pageTitle';
import { useInView } from 'react-cool-inview';

export const LaunchesPageInfiniteScroll = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [items, setItems] = useState<PastLaunchesListQuery['launchesPast']>([]);

  const limit = 16;
  const offset = items?.length;

  const [launchesQuery, { loading, error }] = usePastLaunchesListLazyQuery();

  const loadMoreLaunches = () => {
    launchesQuery({
      variables: {
        limit,
        offset,
      },
    }).then((res) => {
      if (items !== null && items !== undefined && res.data && res.data.launchesPast) {
        setItems([...items, ...res.data.launchesPast]);
      }
    });

    /*fetchMore({
      variables: {
        limit,
        offset,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (
          items !== null &&
          items !== undefined &&
          prev.launchesPast &&
          fetchMoreResult.launchesPast
        ) {
          setItems([...items, ...fetchMoreResult.launchesPast]);

          return Object.assign({}, prev, {
            launchesPast: [...prev.launchesPast, ...fetchMoreResult.launchesPast],
          });
        } else return prev;
      },
    });*/
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

  if (error) {
    return <Container>{error.message}</Container>;
  }

  return (
    <Container>
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
              name={item?.mission_name}
              ref={isLastElement ? observe : null}
            />
          );
        })}
        {loading && <Loader />}
      </CardsContainer>
    </Container>
  );
};
