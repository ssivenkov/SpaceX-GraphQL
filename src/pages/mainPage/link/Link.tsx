import React from 'react';

import { LinkContainer, LinkImage, LinkImageContainer, LinkTitle } from './styles';
import { LinkPropsType } from './types';

export const Link = (props: LinkPropsType) => {
  const { title, to, image } = props;

  return (
    <LinkContainer>
      <LinkImageContainer to={to}>
        <LinkImage alt={`${title} category link`} src={image} />
      </LinkImageContainer>
      <LinkTitle to={to}>{title}</LinkTitle>
    </LinkContainer>
  );
};
