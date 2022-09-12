import React from 'react';

import { CompanyPage } from 'pages/companyPage/CompanyPage';
import { Error404Page } from 'pages/error404Page/Error404Page';
import { LaunchesPage } from 'pages/launchesPage/LaunchesPage';
import { MainPage } from 'pages/mainPage/MainPage';
import { ShipsPage } from 'pages/shipsPage/ShipsPage';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { PATH } from 'types/enum/Path';

export const Navigation = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path={PATH.MAIN_PAGE} />
      <Route element={<CompanyPage />} path={PATH.COMPANY} />
      <Route element={<Outlet />} path={PATH.LAUNCHES}>
        <Route element={<Navigate replace to='1' />} index />
        <Route element={<LaunchesPage />} path=':launchesPage' />
      </Route>
      <Route element={<ShipsPage />} path={PATH.SHIPS} />
      <Route element={<Error404Page />} path={PATH.ERROR_PAGE} />
      <Route element={<Navigate to={PATH.ERROR_PAGE} />} path={PATH.WRONG_PAGE} />
    </Routes>
  );
};
