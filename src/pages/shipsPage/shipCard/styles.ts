import { COLORS } from 'colors/colors';
import styled from 'styled-components';

const { SILVER_CHALICE, SILVER1 } = COLORS;

const maxSize = '200px';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${maxSize};
  background-color: ${SILVER1};
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 18px;
  margin: 5px 8px;
`;

export const Image = styled.img`
  width: ${maxSize};
  height: ${maxSize};
  object-fit: cover;
`;

export const EmptyImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${maxSize};
  height: ${maxSize};
  background-color: ${SILVER_CHALICE};
  &:after {
    content: 'No image';
  }
`;
