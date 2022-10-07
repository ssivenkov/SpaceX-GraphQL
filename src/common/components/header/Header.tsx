import React, { useState } from 'react';

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

export const Header = () => {
  const userToken = localStorage.getItem('userToken');

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const [userPhoto, setUserPhoto] = useState(localStorage.getItem('userPhoto'));

  const signOutCallback = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('userToken');
      localStorage.removeItem('userPhoto');
      setUserPhoto('');
    });
  };

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      if (user && user.photoURL !== null && token) {
        localStorage.setItem('userToken', token);
        localStorage.setItem('userPhoto', user.photoURL);
        setUserPhoto(user.photoURL);
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
