import React from 'react';

import { useLaunchQuery } from 'apollo/generated/schema';
import { Divider } from 'common/components/divider/divider';
import { EmptyImage } from 'common/components/images/emptyImage/emptyImage';
import { Image } from 'common/components/images/image/image';
import { Loader } from 'common/components/loader/Loader';
import { LoaderContainer } from 'common/components/loader/LoaderContainer';
import {
  Container,
  ContainerSpaceBetween,
  PageContainer,
  RowContainer,
} from 'common/components/pageContainer/pageContainer';
import { PageTitle } from 'common/components/pageTitle/pageTitle';
import { NOTIFICATION_TIMEOUT } from 'common/constants/constants';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Caption, Link, Text } from './styles';

export const LaunchPage = () => {
  const { launchId } = useParams<string>();

  const { loading, error, data } = useLaunchQuery({
    variables: {
      launchId: launchId ?? '',
    },
  });

  const imageSize = 350;
  const imageBorderRadius = 10;

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
      <RowContainer>
        <Container margin='0 40px 0 0'>
          {data?.launch?.links?.flickr_images &&
          data?.launch?.links?.flickr_images[0] &&
          data?.launch?.links?.flickr_images[0] !== null ? (
            <Image
              alt={data?.launch?.mission_name ?? 'empty image'}
              borderRadius={imageBorderRadius}
              height={imageSize}
              src={data?.launch?.links?.flickr_images[0]}
              width={imageSize}
            />
          ) : (
            <EmptyImage
              borderRadius={imageBorderRadius}
              height={imageSize}
              width={imageSize}
            />
          )}
        </Container>
        <Container>
          {data?.launch?.mission_name && (
            <PageTitle>{data?.launch?.mission_name}</PageTitle>
          )}
          {data?.launch?.details && <div>{data?.launch?.details}</div>}
          {data?.launch?.rocket?.rocket_name && (
            <>
              <Divider />
              <ContainerSpaceBetween>
                <Caption>Rocket name</Caption>
                <Text>{data?.launch?.rocket?.rocket_name}</Text>
              </ContainerSpaceBetween>
            </>
          )}
          {data?.launch?.launch_date_utc && (
            <>
              <Divider />
              <ContainerSpaceBetween>
                <Caption>Launch date</Caption>
                <Text>{new Date(data?.launch?.launch_date_utc).toLocaleString()}</Text>
              </ContainerSpaceBetween>
            </>
          )}
          {data?.launch?.launch_site?.site_name_long && (
            <>
              <Divider />
              <ContainerSpaceBetween>
                <Caption>Launch site</Caption>
                <Text>{data?.launch?.launch_site?.site_name_long}</Text>
              </ContainerSpaceBetween>
            </>
          )}
          {data?.launch?.links?.article_link && (
            <>
              <Divider />
              <ContainerSpaceBetween>
                <Caption>Article</Caption>
                <Link
                  href={data?.launch?.links?.article_link}
                  rel='noreferrer'
                  target='_blank'
                >
                  Article link
                </Link>
              </ContainerSpaceBetween>
            </>
          )}
          {data?.launch?.links?.video_link && (
            <>
              <Divider />
              <ContainerSpaceBetween>
                <Caption>Video</Caption>
                <Link
                  href={data?.launch?.links?.video_link}
                  rel='noreferrer'
                  target='_blank'
                >
                  Video link
                </Link>
              </ContainerSpaceBetween>
            </>
          )}
        </Container>
      </RowContainer>
    </PageContainer>
  );
};
