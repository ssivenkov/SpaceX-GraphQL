import React from 'react';

import { useQuery } from '@apollo/client';
import { darkModeQuery } from 'apollo/querys/darkModeQuery';
import { changeTheme } from 'App';
import { darkThemeColors, lightThemeColors } from 'common/colors/themeColors';
import { DARK_THEME, LIGHT_THEME } from 'common/constants/constants';

import styles from './style.module.scss';

export const ThemeSwitcher = () => {
  const { data } = useQuery(darkModeQuery);

  const userTheme = localStorage.getItem('userTheme') ?? false;

  const isDarkTheme = userTheme === DARK_THEME;

  const setTheme = () => {
    if (data?.isDarkMode) {
      changeTheme({ userTheme: LIGHT_THEME, themeColors: lightThemeColors });
    } else changeTheme({ userTheme: DARK_THEME, themeColors: darkThemeColors });
  };

  return (
    <div className={styles.switcherContainer}>
      <input checked={isDarkTheme} id='switch' onChange={setTheme} type='checkbox' />
      <label htmlFor='switch'>Dark mode toggle</label>
    </div>
  );
};
