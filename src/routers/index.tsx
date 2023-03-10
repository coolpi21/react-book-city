import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import BookList from '@/pages/bookList';
import Home from '@/pages/home';
import Ranking from '@/pages/ranking';
import Search from '@/pages/search';
import Shelf from '@/pages/shelf';

const Router: React.FC = React.memo(() => {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/ranking',
      element: <Ranking />,
    },
    {
      path: '/book-list',
      element: <BookList />,
    },
    {
      path: '/shelf',
      element: <Shelf />,
    },
    {
      path: '/search',
      element: <Search />,
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ]);
  return element;
});

export default Router;
