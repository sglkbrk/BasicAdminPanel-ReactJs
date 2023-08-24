import React, { useState } from 'react';
import { Box, CssBaseline, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import TopBar from './Header';
import Sidebar from './sideBar/Sidebar';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTheme } from '@mui/material/styles';
const MainLayout: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerOpenFull, setDrawerOpenFull] = useState(true);
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const handleLeftDrawerToggle = () => {
    console.log(matchUpMd);
    if (matchUpMd) setDrawerOpenFull(!drawerOpenFull);
    else {
      setDrawerOpenFull(true);
      setDrawerOpen(!drawerOpen);
    }
  };

  return (
    <PerfectScrollbar component="div" style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <TopBar drawerToggle={handleLeftDrawerToggle} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        {drawerOpenFull && <Sidebar drawerOpen={drawerOpen} drawerToggle={handleLeftDrawerToggle} />}
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            overflow: 'auto',
            borderRadius: '24px',
            padding: 3,
            margin: 1,
            border: 'none',
            backgroundColor: '#eef2f6',
            marginTop: '89px'
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </PerfectScrollbar>
  );
};

export default MainLayout;
