import React from 'react';

import { PageContainer } from 'common/components/pageContainer/pageContainer';
import { PATH } from 'types/enum/Path';

import { ErrorLink, ErrorText } from './styles';

export const Error404Page = () => {
  return (
    <PageContainer>
      <ErrorText>Error 404 - Page not found</ErrorText>
      <ErrorLink to={PATH.MAIN_PAGE}>Back to home</ErrorLink>
    </PageContainer>
  );
};
