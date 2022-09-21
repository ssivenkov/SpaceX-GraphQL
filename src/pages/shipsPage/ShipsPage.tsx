import React, { useEffect, useState } from 'react';

import { ShipsQuery, useShipsLazyQuery } from 'apollo/generated/schema';
import { CardsContainer } from 'common/components/cardsContainer/cardsContainer';
import ListItemCard from 'common/components/listItemCard/ListItemCard';
import { Loader } from 'common/components/loader/Loader';
import { LoaderContainer } from 'common/components/loader/LoaderContainer';
import { Container, PageContainer } from 'common/components/pageContainer/pageContainer';
import { PageTitle } from 'common/components/pageTitle/pageTitle';
import { useInView } from 'react-cool-inview';

export const ShipsPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [items, setItems] = useState<ShipsQuery['ships']>([]);

  const limit = 16;
  const offset = items?.length;

  const [shipsQuery, { loading, error }] = useShipsLazyQuery();

  const loadMoreShips = () => {
    shipsQuery({
      variables: {
        limit,
        offset,
      },
      fetchPolicy: 'network-only',
      nextFetchPolicy: 'cache-first',
    }).then((res) => {
      if (items !== null && items !== undefined && res.data && res.data.ships) {
        setItems([...items, ...res.data.ships]);
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
    loadMoreShips();
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
      <PageTitle>Ships</PageTitle>
      <CardsContainer>
        {items?.map((item, index, array) => {
          const isLastElement = index === array.length - 1;

          return (
            <ListItemCard
              image={item?.image !== null ? item?.image : ''}
              key={item?.id}
              name={item?.name}
              ref={isLastElement ? observe : null}
            />
          );
        })}
        {loading && <Loader />}
      </CardsContainer>
    </PageContainer>
  );
};
