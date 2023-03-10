import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import BookList from '@/pages/bookList';
import Home from '@/pages/home';

const Router: React.FC = React.memo(() => {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/book-list',
      element: <BookList />,
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ]);
  return element;
});

export default Router;
