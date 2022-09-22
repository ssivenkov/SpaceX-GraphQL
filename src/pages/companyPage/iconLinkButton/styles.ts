import styled from 'styled-components';

export const StyledLinkButton = styled.a`
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  margin: 0 12px;
  font-size: 34px;
  color: var(--text);

  @media (pointer: coarse) {
    &:active {
      color: var(--nav);
      filter: drop-shadow(0 0 3px var(--text));
    }
  }

  @media (pointer: fine) {
    &:hover {
      color: var(--nav);
      filter: drop-shadow(0 0 3px var(--text));
    }
    &:active {
      filter: none;
    }
  }
`;
