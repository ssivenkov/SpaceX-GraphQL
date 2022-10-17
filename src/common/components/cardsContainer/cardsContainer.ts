import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 915px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
