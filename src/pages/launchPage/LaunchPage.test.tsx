import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing';
import { MockedProviderProps } from '@apollo/client/testing/react/MockedProvider';
import { render, screen } from '@testing-library/react';
import { LAUNCH } from 'apollo/querys/testJsQuerys/launch.query';
import { Route, MemoryRouter, Routes } from 'react-router';
import { Outlet } from 'react-router-dom';

import { LaunchPage } from './LaunchPage';

const correctMock: MockedProviderProps['mocks'] = [
  {
    request: {
      query: LAUNCH,
      variables: {
        launchId: '108',
      },
    },
    result: {
      data: {
        launch: {
          details:
            'SpaceX will launch Sentinel-6 Michael Freilich into low Earth orbit for NASA, NOAA, ESA, and the European Organization for the Exploitation of Meteorological Satellites aboard a Falcon 9 from SLC-4E, Vandenberg Air Force Station. Sentinel-6(A) is an ocean observation satellite providing radar ocean surface altimetry data and also atmospheric temperature profiles as a secondary mission. The booster for this mission is will land at LZ-4.',
          id: '108',
          launch_date_utc: '2020-11-21T17:17:00.000Z',
          launch_site: {
            site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E',
          },
          links: {
            article_link:
              'https://spaceflightnow.com/2020/11/21/international-satellite-launches-to-extend-measurements-of-sea-level-rise/',
            flickr_images: [
              'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg',
              'https://live.staticflickr.com/65535/50631642722_3af8131c6f_o.jpg',
              'https://live.staticflickr.com/65535/50631544171_66bd43eaa9_o.jpg',
              'https://live.staticflickr.com/65535/50631543966_e8035d5cca_o.jpg',
              'https://live.staticflickr.com/65535/50631643257_c214ceee7b_o.jpg',
              'https://live.staticflickr.com/65535/50631643917_cb7db291d0_o.jpg',
            ],
            mission_patch: null,
            video_link: 'https://youtu.be/aVFPzTDCihQ',
          },
          mission_name: 'Sentinel-6 Michael Freilich',
          rocket: {
            rocket_name: 'Falcon 9',
          },
        },
      },
    },
  },
];

const errorMessage = 'Network error';
const networkErrorMock: MockedProviderProps['mocks'] = [
  {
    request: {
      query: LAUNCH,
      variables: {
        launchId: '108',
      },
    },
    error: new Error(errorMessage),
  },
];

describe('Launch page tests', () => {
  it('should render Launch page without error', async () => {
    render(
      <MemoryRouter initialEntries={['/launches/108']}>
        <Routes>
          <Route element={<Outlet />} path='launches'>
            <Route
              element={
                <MockedProvider
                  addTypename={false}
                  defaultOptions={{
                    query: {
                      errorPolicy: 'all',
                    },
                  }}
                  mocks={correctMock}
                >
                  <LaunchPage />
                </MockedProvider>
              }
              path=':launchId'
            />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(await screen.findByTestId('loader')).toBeInTheDocument();
    expect(await screen.findByText('Sentinel-6 Michael Freilich')).toBeInTheDocument();
  });

  it('should render Launch page with network error', async () => {
    render(
      <MemoryRouter initialEntries={['/launches/108']}>
        <Routes>
          <Route element={<Outlet />} path='launches'>
            <Route
              element={
                <MockedProvider
                  addTypename={false}
                  defaultOptions={{
                    query: {
                      errorPolicy: 'all',
                    },
                  }}
                  mocks={networkErrorMock}
                >
                  <LaunchPage />
                </MockedProvider>
              }
              path=':launchId'
            />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(await screen.findByText(errorMessage)).toBeInTheDocument();
  });
});
