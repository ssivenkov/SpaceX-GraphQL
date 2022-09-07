import { COLORS } from 'colors/colors';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  min-height: 45px;
  background-color: ${COLORS.SILVER1};
`;

export const ContactsContainer = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
