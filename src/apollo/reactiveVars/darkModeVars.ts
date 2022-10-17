import { makeVar } from '@apollo/client';

export const isDarkModeVar = makeVar(true);

export const toggleDarkMode = () => {
  const current = isDarkModeVar();

  isDarkModeVar(!current);
};
