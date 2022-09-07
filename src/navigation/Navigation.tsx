import React from 'react';

import { PATH } from 'enum/Path';
import { Error404Page } from 'pages/error404Page/Error404Page';
import { MainPage } from 'pages/mainPage/MainPage';
import { ShipsPage } from 'pages/shipsPage/ShipsPage';
import { Routes, Route, Navigate } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path={PATH.MAIN_PAGE} />
      <Route element={<ShipsPage />} path={PATH.SHIPS} />
      <Route element={<Error404Page />} path={PATH.ERROR_PAGE} />
      <Route element={<Navigate to={PATH.ERROR_PAGE} />} path={PATH.WRONG_PAGE} />
    </Routes>
  );
};
