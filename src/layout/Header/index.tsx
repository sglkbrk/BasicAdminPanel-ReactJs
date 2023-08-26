import React from 'react';
import { Box, Toolbar, AppBar, useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { useTheme } from '@mui/material/styles';
import ProfileMenu from './ProfileMenu';
import Search from './Search';
import Logo from './Logo';

import Notifications from './Notifications';

interface Props {
  drawerToggle: () => void;
}

const TopBar: React.FC<Props> = ({ drawerToggle }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const menuId = 'primary-search-account-menu';
  return (
    <AppBar
      enableColorOnDark
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{
        bgcolor: theme.palette.background.default
      }}
    >
      <Box position="static" sx={{ backgroundColor: 'paper' }}>
        <Toolbar sx={{ border: 'none' }}>
          <Logo />
          <IconButton
            onClick={drawerToggle}
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ ml: 1, mr: 0, padding: 1, background: theme.palette.secondary.light, borderRadius: 3 }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Search></Search>
          <Box sx={{ flexGrow: 1 }} />
          <Notifications />
          <IconButton
            sx={{
              backgroundColor: theme.palette.secondary.light,
              borderRadius: 3,
              padding: 1.2,
              marginLeft: matchesXs ? 1 : 2,
              marginRight: matchesXs ? 1 : 0
            }}
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="secondary"
          >
            <AccountCircle fontSize="small" />
          </IconButton>
        </Toolbar>
      </Box>
      <ProfileMenu menuId={menuId} anchorEl={anchorEl} isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose} />
    </AppBar>
  );
};

export default TopBar;
