import { COLORS } from 'common/colors/colors';
import styled from 'styled-components';

export const Caption = styled.div`
  margin-right: 50px;
  white-space: nowrap;
  font-weight: 700;
  color: ${COLORS.BLACK};
`;

export const Text = styled.div`
  color: ${COLORS.BLACK};
  text-align: end;
`;

export const Link = styled.a`
  ${Text};
  text-decoration: underline;
`;
