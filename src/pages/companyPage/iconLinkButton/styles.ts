import { COLORS } from 'common/colors/colors';
import styled from 'styled-components';

const { BLACK, SILVER1 } = COLORS;

export const StyledLinkButton = styled.a`
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  margin: 0 12px;
  font-size: 34px;
  color: ${BLACK};

  @media (pointer: coarse) {
    &:active {
      color: ${SILVER1};
      filter: drop-shadow(0 0 3px ${BLACK});
    }
  }

  @media (pointer: fine) {
    &:hover {
      color: ${SILVER1};
      filter: drop-shadow(0 0 3px ${BLACK});
    }
    &:active {
      filter: none;
    }
  }
`;
