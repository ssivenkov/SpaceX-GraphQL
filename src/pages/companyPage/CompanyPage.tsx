import React from 'react';

import { useCompanyInfoQuery } from 'apollo/generated/schema';
import SpaceXLogo from 'common/assets/images/SpaceXLogo.jpeg';
import { Loader } from 'common/components/loader/Loader';
import { LoaderContainer } from 'common/components/loader/LoaderContainer';
import { PageContainer } from 'common/components/pageContainer/pageContainer';
import { PageTitle } from 'common/components/pageTitle/pageTitle';
import { NOTIFICATION_TIMEOUT } from 'common/constants/constants';
import { FaFlickr, FaTwitter } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { ToastContainer } from 'react-toastify';

import { IconLinkButton } from './iconLinkButton/IconLinkButton';
import {
  CompanyCardContainer,
  IconsContainer,
  SpaceXLogoImage,
  Text,
  TextContentContainer,
} from './styles';

export const CompanyPage = () => {
  const { loading, data, error } = useCompanyInfoQuery();

  const headquarters = `${data?.company?.headquarters?.address}, ${data?.company?.headquarters?.city}, ${data?.company?.headquarters?.state}`;

  if (error) {
    return (
      <PageContainer>
        <ToastContainer autoClose={NOTIFICATION_TIMEOUT} />
        <div>{error.message}</div>
      </PageContainer>
    );
  }

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

  return (
    <PageContainer>
      <ToastContainer autoClose={NOTIFICATION_TIMEOUT} />
      <PageTitle>SpaceX</PageTitle>
      <TextContentContainer>
        <CompanyCardContainer>
          <SpaceXLogoImage alt='SpaceX logo' src={SpaceXLogo} />
          <IconsContainer>
            {data?.company?.links?.elon_twitter && (
              <IconLinkButton
                icon={<FaTwitter />}
                link={data?.company?.links?.elon_twitter}
              />
            )}
            {data?.company?.links?.twitter && (
              <IconLinkButton icon={<FaTwitter />} link={data?.company?.links?.twitter} />
            )}
            {data?.company?.links?.flickr && (
              <IconLinkButton icon={<FaFlickr />} link={data?.company?.links?.flickr} />
            )}
            {data?.company?.links?.website && (
              <IconLinkButton icon={<IoMdHome />} link={data?.company?.links?.website} />
            )}
          </IconsContainer>
        </CompanyCardContainer>
        <div>
          <Text>{`Valuation: $${data?.company?.valuation?.toLocaleString('en')}`}</Text>
          <Text>{`Founded year: ${data?.company?.founded}`}</Text>
          <Text>{`Founder: ${data?.company?.founder}`}</Text>
          <Text>{`CEO: ${data?.company?.ceo}`}</Text>
          <Text>{`COO: ${data?.company?.coo}`}</Text>
          <Text>{`CTO: ${data?.company?.cto}`}</Text>
          <Text>{`CTO Propulsion: ${data?.company?.cto_propulsion}`}</Text>
          <Text>{`Employees count: ${data?.company?.employees}`}</Text>
          <Text>{`Headquarters: ${headquarters}`}</Text>
          <Text>{`Summary: ${data?.company?.summary}`}</Text>
        </div>
      </TextContentContainer>
    </PageContainer>
  );
};
