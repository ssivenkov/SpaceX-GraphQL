import { gql } from '@apollo/client';

export const COMPANY_INFO = gql`
  query CompanyInfo {
    company {
      ceo
      coo
      cto
      cto_propulsion
      employees
      founded
      founder
      headquarters {
        address
        city
        state
      }
      links {
        elon_twitter
        flickr
        twitter
        website
      }
      summary
      valuation
    }
  }
`;
