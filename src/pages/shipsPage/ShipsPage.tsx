import React from 'react';

import { useShipsQuery } from 'apollo/generated/schema';
import { PATH } from 'enum/Path';
import { Link } from 'react-router-dom';

import { ShipCard } from './shipCard/ShipCard';
import { StyledShipsContainer, StyledLinkContainer } from './styles';

export const ShipsPage = () => {
  const { loading, error, data } = useShipsQuery();

  if (error) {
    return <div>{error.message}</div>;
  }

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div>
      <StyledLinkContainer>
        <Link to={PATH.MAIN_PAGE}>Main page</Link>
      </StyledLinkContainer>
      <StyledShipsContainer>
        {data?.ships?.map((item) => {
          return <ShipCard image={item?.image} key={item?.id} name={item?.name} />;
        })}
      </StyledShipsContainer>
    </div>
  );
};
