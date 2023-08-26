import React from 'react';
import { CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';

import PerfectScrollbar from 'react-perfect-scrollbar';

const MainLayout: React.FC = () => {
  return (
    <PerfectScrollbar component="div">
      <CssBaseline />
      <Outlet />
    </PerfectScrollbar>
  );
};

export default MainLayout;
