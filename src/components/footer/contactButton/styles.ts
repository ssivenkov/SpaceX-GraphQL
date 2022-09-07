import { COLORS } from 'colors/colors';
import styled from 'styled-components';

const { BLACK, SILVER_CHALICE, SILVER1, TUNDORA } = COLORS;

export const StyledContactButton = styled.a`
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 12px 0;
  font-size: 35px;
  border-radius: 50%;
  color: ${BLACK};
  background-color: ${SILVER_CHALICE};

  @media (pointer: coarse) {
    &:active {
      filter: drop-shadow(0 0 9px ${TUNDORA});
    }
  }

  @media (pointer: fine) {
    &:hover {
      background-color: ${SILVER1};
      box-shadow: 0 0 13px 1px ${SILVER_CHALICE};
      text-shadow: 0 0 15px ${SILVER_CHALICE}, 0 0 5px ${SILVER_CHALICE};
    }
    &:active {
      background-color: ${TUNDORA};
      box-shadow: 0 0 9px 1px ${TUNDORA};
    }
  }
`;
