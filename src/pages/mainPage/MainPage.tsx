import React from 'react';

import { useCompanyInfoQuery } from 'apollo/generated/schema';
import { PATH } from 'enum/Path';
import { Link } from 'react-router-dom';

export const MainPage = () => {
  const { loading, data, error } = useCompanyInfoQuery();

  if (error) {
    return <div>{error.message}</div>;
  }

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div>
      <div>{`Company name: ${data?.company?.name}`}</div>
      <div>{`CEO: ${data?.company?.ceo}`}</div>
      <div>{`Summary: ${data?.company?.summary}`}</div>
      <div>{`Vehicle count: ${data?.company?.vehicles}`}</div>
      <Link to={PATH.SHIPS}>Ships page</Link>
    </div>
  );
};
