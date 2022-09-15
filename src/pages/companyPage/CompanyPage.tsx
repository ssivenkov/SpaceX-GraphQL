import React from 'react';

import { useCompanyInfoQuery } from 'apollo/generated/schema';
import SpaceXLogo from 'common/assets/images/SpaceXLogo.jpeg';
import { Loader } from 'common/components/loader/Loader';
import { Container } from 'common/components/pageContainer/pageContainer';
import { PageTitle } from 'common/components/pageTitle/pageTitle';
import { FaTwitter, FaFlickr } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';

import { IconLinkButton } from './iconLinkButton/IconLinkButton';
import {
  CompanyCardContainer,
  ContentContainer,
  Text,
  IconsContainer,
  SpaceXLogoImage,
} from './styles';

export const CompanyPage = () => {
  const { loading, data, error } = useCompanyInfoQuery();

  const headquarters = `${data?.company?.headquarters?.address}, ${data?.company?.headquarters?.city}, ${data?.company?.headquarters?.state}`;

  if (error) {
    return <Container>{error.message}</Container>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <PageTitle>SpaceX</PageTitle>
      <ContentContainer>
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
      </ContentContainer>
    </Container>
  );
};
