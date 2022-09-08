import styled from 'styled-components';

export const StyledLinkButton = styled.a`
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  margin: 0 12px;
  font-size: 34px;
  color: var(--primary);

  @media (pointer: coarse) {
    &:active {
      color: var(--primary_light);
      filter: drop-shadow(0 0 5px var(--primary_medium));
    }
  }

  @media (pointer: fine) {
    &:hover {
      color: var(--primary_light);
      filter: drop-shadow(0 0 5px var(--primary_medium));
    }
    &:active {
      filter: none;
    }
  }
`;
