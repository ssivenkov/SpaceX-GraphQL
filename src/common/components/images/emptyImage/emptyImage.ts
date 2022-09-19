import { COLORS } from 'common/colors/colors';
import styled from 'styled-components';

import { ImagePropsType } from './types';

export const defaultImageSize = 200;

export const EmptyImage = styled.div<ImagePropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 0)}px;
  width: ${(props) => (props.width ? props.width : defaultImageSize)}px;
  height: ${(props) => (props.height ? props.height : defaultImageSize)}px;
  background-color: ${COLORS.SILVER_CHALICE};
  &:after {
    content: 'No image';
  }
`;
