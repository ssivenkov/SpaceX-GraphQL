import { Dispatch, SetStateAction } from 'react';

export type ChangeThemeParams = {
  userTheme: string;
  themeColors: string[];
};

export type SetStateType<T> = Dispatch<SetStateAction<T>>;
export type NullableType<T> = null | T;
