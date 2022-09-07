import React from 'react';

import { LinkContainer, LinkImage, LinkTitle } from './styles';
import { LinkPropsType } from './types';

export const Link = (props: LinkPropsType) => {
  const { title, to } = props;

  return (
    <LinkContainer>
      <LinkImage to={to} />
      <LinkTitle to={to}>{title}</LinkTitle>
    </LinkContainer>
  );
};
