import { COLORS } from 'common/colors/colors';
import styled from 'styled-components';

import { defaultImageSize } from '../emptyImage/emptyImage';
import { ImagePropsType } from '../emptyImage/types';

export const Image = styled.img<ImagePropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 0)}px;
  width: ${(props) => (props.width ? props.width : defaultImageSize)}px;
  height: ${(props) => (props.height ? props.height : defaultImageSize)}px;
  background-color: ${COLORS.SILVER_CHALICE};
`;
