import React from 'react';

import { StyledLinkButton } from './styles';
import { IconLinkButtonPropsType } from './types';

export const IconLinkButton = (props: IconLinkButtonPropsType) => {
  const { link, icon } = props;

  return (
    <StyledLinkButton href={link} rel='noreferrer' target='_blank'>
      {icon}
    </StyledLinkButton>
  );
};
