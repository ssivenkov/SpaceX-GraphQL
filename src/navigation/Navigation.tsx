import React from 'react';

import { CompanyPage } from 'pages/companyPage/CompanyPage';
import { Error404Page } from 'pages/error404Page/Error404Page';
import { LaunchesPageInfiniteScroll } from 'pages/launchesPageInfiniteScroll/LaunchesPageInfiniteScroll';
import { LaunchesPagePagination } from 'pages/launchesPagePagination/LaunchesPagePagination';
import { LaunchPage } from 'pages/launchPage/LaunchPage';
import { MainPage } from 'pages/mainPage/MainPage';
import { ShipsPage } from 'pages/shipsPage/ShipsPage';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { PATH } from 'types/enum/Path';

export const Navigation = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path={PATH.MAIN_PAGE} />
      <Route element={<CompanyPage />} path={PATH.COMPANY} />
      <Route element={<LaunchesPageInfiniteScroll />} path={PATH.LAUNCHES_IS} />
      <Route element={<Outlet />} path={PATH.LAUNCHES_P}>
        <Route element={<Navigate replace to='1' />} index />
        <Route element={<LaunchesPagePagination />} path=':launchesPage' />
      </Route>
      <Route element={<Outlet />} path={PATH.LAUNCHES}>
        <Route element={<LaunchPage />} path=':launchId' />
      </Route>
      <Route element={<ShipsPage />} path={PATH.SHIPS} />
      <Route element={<Error404Page />} path={PATH.ERROR_PAGE} />
      <Route element={<Navigate to={PATH.ERROR_PAGE} />} path={PATH.WRONG_PAGE} />
    </Routes>
  );
};
