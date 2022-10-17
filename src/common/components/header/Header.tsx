import React, { useState } from 'react';

import { client } from 'apollo/client';
import { USER_ID, USER_PHOTO, USER_TOKEN } from 'common/constants/constants';
import { GoogleAuthProvider, signInWithPopup, signOut, getAuth } from 'firebase/auth';

import {
  AuthButton,
  AuthContainer,
  AuthWrapper,
  HeaderContainer,
  SwitcherTitle,
  SwitcherWrapper,
  UserPhoto,
} from './styles';
import { ThemeSwitcher } from './themeSwitcher/ThemeSwitcher';
import { HeaderPropsType } from './types';

export const Header = (props: HeaderPropsType) => {
  const { setUserID } = props;
  const userToken = localStorage.getItem('userToken');

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const [userPhoto, setUserPhoto] = useState(localStorage.getItem('userPhoto'));

  const signOutCallback = () => {
    signOut(auth).then(() => {
      client.resetStore();
      localStorage.removeItem(USER_TOKEN);
      localStorage.removeItem(USER_ID);
      localStorage.removeItem(USER_PHOTO);
      setUserPhoto('');
      setUserID(null);
    });
  };

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);

      const token = credential?.accessToken;
      const user = result.user;
      const userID = result.user.uid;

      if (user && user.photoURL !== null && token) {
        client.resetStore();
        localStorage.setItem(USER_TOKEN, token);
        localStorage.setItem(USER_ID, userID);
        localStorage.setItem(USER_PHOTO, user.photoURL);
        setUserPhoto(user.photoURL);
        setUserID(result.user.uid);
      }
    });
  };

  return (
    <HeaderContainer>
      <SwitcherWrapper>
        <SwitcherTitle>Dark mode</SwitcherTitle>
        <ThemeSwitcher />
      </SwitcherWrapper>
      <AuthWrapper>
        {userToken ? (
          <AuthContainer>
            {!!userPhoto && <UserPhoto src={userPhoto} />}
            <AuthButton onClick={() => signOutCallback()}>Sign out</AuthButton>
          </AuthContainer>
        ) : (
          <AuthContainer>
            <AuthButton onClick={() => signIn()}>Sign in</AuthButton>
          </AuthContainer>
        )}
      </AuthWrapper>
    </HeaderContainer>
  );
};
