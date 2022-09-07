import React from 'react';

import { StyledContactButton } from './styles';
import { ContactButtonPropsType } from './types';

export const ContactButton = (props: ContactButtonPropsType) => {
  const { link, icon } = props;

  return (
    <StyledContactButton href={link} rel='noreferrer' target='_blank'>
      {icon}
    </StyledContactButton>
  );
};
