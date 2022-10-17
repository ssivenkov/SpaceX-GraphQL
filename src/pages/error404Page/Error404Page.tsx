import React from 'react';

import { PageContainer } from 'common/components/pageContainer/pageContainer';
import { NOTIFICATION_TIMEOUT } from 'common/constants/constants';
import { ToastContainer } from 'react-toastify';
import { PATH } from 'types/enum/Path';

import { ErrorLink, ErrorText } from './styles';

export const Error404Page = () => {
  return (
    <PageContainer>
      <ToastContainer autoClose={NOTIFICATION_TIMEOUT} />
      <ErrorText>Error 404 - Page not found</ErrorText>
      <ErrorLink to={PATH.MAIN_PAGE}>Back to home</ErrorLink>
    </PageContainer>
  );
};
