import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing';
import { MockedProviderProps } from '@apollo/client/testing/react/MockedProvider';
import { render, screen } from '@testing-library/react';
import { COMPANY_INFO } from 'apollo/querys/testJsQuerys/companyInfo.query';

import { CompanyPage } from './CompanyPage';

const correctMock: MockedProviderProps['mocks'] = [
  {
    request: {
      query: COMPANY_INFO,
    },
    result: {
      data: {
        company: {
          ceo: 'Elon Musk',
          coo: 'Gwynne Shotwell',
          cto: 'Elon Musk',
          cto_propulsion: 'Tom Mueller',
          employees: 7000,
          founded: 2002,
          founder: 'Elon Musk',
          headquarters: {
            address: 'Rocket Road',
            city: 'Hawthorne',
            state: 'California',
          },
          links: {
            elon_twitter: 'https://twitter.com/elonmusk',
            flickr: 'https://www.flickr.com/photos/spacex/',
            twitter: 'https://twitter.com/SpaceX',
            website: 'https://www.spacex.com/',
          },
          summary:
            'SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.',
          valuation: 27500000000,
        },
      },
    },
  },
];

const errorMessage = 'Network error';
const networkErrorMock: MockedProviderProps['mocks'] = [
  {
    request: {
      query: COMPANY_INFO,
    },
    error: new Error(errorMessage),
  },
];

describe('Company page tests', () => {
  it('should render Company page without error', async () => {
    render(
      <MockedProvider
        addTypename={false}
        defaultOptions={{
          query: {
            errorPolicy: 'all',
          },
        }}
        mocks={correctMock}
      >
        <CompanyPage />
      </MockedProvider>,
    );

    expect(await screen.findByTestId('loader')).toBeInTheDocument();
    expect(await screen.findByText('CTO: Elon Musk')).toBeInTheDocument();
  });

  it('should render Company page with network error', async () => {
    render(
      <MockedProvider
        addTypename={false}
        defaultOptions={{
          query: {
            errorPolicy: 'all',
          },
        }}
        mocks={networkErrorMock}
      >
        <CompanyPage />
      </MockedProvider>,
    );

    expect(await screen.findByText(errorMessage)).toBeInTheDocument();
  });
});
