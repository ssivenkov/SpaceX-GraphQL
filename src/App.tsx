import React from 'react';

import { toggleDarkMode } from 'apollo/reactiveVars/darkModeVars';
import { darkThemeColors, lightThemeColors } from 'common/colors/themeColors';
import { Footer } from 'common/components/footer/Footer';
import { Header } from 'common/components/header/Header';
import { DARK_THEME, LIGHT_THEME } from 'common/constants/constants';
import { Navigation } from 'navigation/Navigation';
import { ChangeThemeParams } from 'types';

import { AppContainer, ContentContainer } from './styles';

export const changeTheme = (params: ChangeThemeParams): void => {
  const { userTheme, themeColors } = params;

  localStorage.setItem('userTheme', userTheme);

  const doc = document.querySelector('html');

  toggleDarkMode();

  if (doc) {
    doc.style.setProperty('--text', themeColors[0]);
    doc.style.setProperty('--background', themeColors[1]);
    doc.style.setProperty('--nav', themeColors[2]);
    doc.style.setProperty('--cardBackground', themeColors[3]);
    doc.style.setProperty('--cardLink', themeColors[4]);
    doc.style.setProperty('--cardLinkHover', themeColors[5]);
  }
};

export const App = () => {
  if (localStorage.getItem('userTheme')) {
    let localTheme = LIGHT_THEME;
    const userTheme = localStorage.getItem('userTheme') ?? false;

    if (userTheme) {
      localTheme = userTheme;
    }

    let themeColorsPack = lightThemeColors;

    switch (localTheme) {
      case LIGHT_THEME:
        themeColorsPack = lightThemeColors;
        break;
      case DARK_THEME:
        themeColorsPack = darkThemeColors;
        break;
      default:
        break;
    }

    changeTheme({ userTheme: localTheme, themeColors: themeColorsPack });
  }

  return (
    <AppContainer>
      <Header />
      <ContentContainer>
        <Navigation />
      </ContentContainer>
      <Footer />
    </AppContainer>
  );
};
