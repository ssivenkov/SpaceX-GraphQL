import React, { createContext, useEffect, useState } from 'react';

import { toggleDarkMode } from 'apollo/reactiveVars/darkModeVars';
import { darkThemeColors, lightThemeColors } from 'common/colors/themeColors';
import { Footer } from 'common/components/footer/Footer';
import { Header } from 'common/components/header/Header';
import {
  DARK_THEME,
  LIGHT_THEME,
  USER_ID,
  USER_THEME,
  USER_TOKEN,
} from 'common/constants/constants';
import { Navigation } from 'navigation/Navigation';
import { ChangeThemeParams, NullableType } from 'types';

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

export type UserIDType = NullableType<string>;

export const UserIDContext = createContext(localStorage.getItem(USER_ID));

export const App = () => {
  const [userID, setUserID] = useState<UserIDType>(localStorage.getItem(USER_ID));

  if (localStorage.getItem(USER_THEME)) {
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

  useEffect(() => {
    const userID = localStorage.getItem(USER_ID);
    const userToken = localStorage.getItem(USER_TOKEN);

    if (userID && userToken) {
      setUserID(userID);
    } else setUserID(null);
  }, [userID]);

  return (
    <UserIDContext.Provider value={localStorage.getItem(USER_ID)}>
      <AppContainer>
        <Header setUserID={setUserID} />
        <ContentContainer>
          <Navigation />
        </ContentContainer>
        <Footer />
      </AppContainer>
    </UserIDContext.Provider>
  );
};
