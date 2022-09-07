import { COLORS } from 'colors/colors';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const LinkImage = styled(Link)`
  width: 160px;
  height: 160px;
  border-radius: 10px;
  background-color: ${COLORS.SILVER_CHALICE};
  margin-bottom: 8px;
`;

export const LinkTitle = styled(Link)``;
