import { gql } from '@apollo/client';

export const darkModeQuery = gql`
  query getDarkMode {
    isDarkMode @client
  }
`;
