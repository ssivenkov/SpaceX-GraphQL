import React from 'react';

import { HeaderContainer, SwitcherTitle, SwitcherWrapper } from './styles';
import { ThemeSwitcher } from './themeSwitcher/ThemeSwitcher';

export const Header = () => {
  return (
    <HeaderContainer>
      <SwitcherWrapper>
        <SwitcherTitle>Dark mode</SwitcherTitle>
        <ThemeSwitcher />
      </SwitcherWrapper>
    </HeaderContainer>
  );
};
