import { COLORS } from 'common/colors/colors';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const maxSize = '200px';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: ${maxSize};
  background-color: ${COLORS.SILVER2};
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: ${maxSize};
  height: ${maxSize};
  object-fit: cover;
`;

export const Title = styled.div`
  flex: 1 0 auto;
  text-align: center;
  font-size: 18px;
  margin: 5px 8px;
`;

export const StyledLink = styled(Link)`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  background-color: #ddd;
  &:hover {
    background-color: #eee;
  }
`;
