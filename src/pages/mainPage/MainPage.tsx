import React from 'react';

import { useCompanyQuery } from 'apollo/generated/schema';

export const MainPage = () => {
  const { loading, data, error } = useCompanyQuery();

  if (error) {
    return <div>{error.message}</div>;
  }

  if (loading) {
    return <div>loading ...</div>;
  }

  return (
    <div>
      <div>{`Company name: ${data?.company?.name}`}</div>
      <div>{`CEO: ${data?.company?.ceo}`}</div>
      <div>{`Summary: ${data?.company?.summary}`}</div>
      <div>{`Vehicle count: ${data?.company?.vehicles}`}</div>
    </div>
  );
};
