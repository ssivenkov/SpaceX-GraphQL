import { COLORS } from 'common/colors/colors';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const imageSize = '160px';

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const LinkImageContainer = styled(Link)`
  width: ${imageSize};
  height: ${imageSize};
  border-radius: 10px;
  background-color: ${COLORS.SILVER_CHALICE};
  margin-bottom: 8px;
  overflow: hidden;
`;

export const LinkImage = styled.img`
  width: ${imageSize};
  height: ${imageSize};
  object-fit: cover;
`;

export const LinkTitle = styled(Link)`
  text-align: center;
  color: var(--text);
`;
