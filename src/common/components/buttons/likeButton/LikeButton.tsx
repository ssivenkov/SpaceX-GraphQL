import React from 'react';

import { FaHeart } from 'react-icons/fa';

import { LikeButtonWrapper } from './styles';
import { LikeButtonPropsType } from './types';

export const LikeButton = (props: LikeButtonPropsType) => {
  const { isLike, onClick } = props;

  return (
    <LikeButtonWrapper isLike={isLike} onClick={onClick}>
      <FaHeart />
    </LikeButtonWrapper>
  );
};
