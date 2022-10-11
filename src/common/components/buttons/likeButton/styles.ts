import styled from 'styled-components';

import { LikeButtonPropsType } from './types';

export const LikeButtonWrapper = styled.button<LikeButtonPropsType>`
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => (props.isLike ? '#FF0000' : '#DDDDDD')};
  background-color: transparent;
`;
