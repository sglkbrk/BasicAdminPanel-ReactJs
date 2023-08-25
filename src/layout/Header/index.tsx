import React from 'react';
import { Box, Toolbar, AppBar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useTheme } from '@mui/material/styles';
import ProfileMenu from './ProfileMenu';
import MobileMenu from './MobileMenu';
import Search from './Search';
import Logo from './Logo';

import Notifications from './Notifications';

interface Props {
  drawerToggle: () => void;
}

const TopBar: React.FC<Props> = ({ drawerToggle }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const theme = useTheme();
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
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Notifications />
            <IconButton
              sx={{ backgroundColor: theme.palette.secondary.light, borderRadius: 3, padding: 1.2, marginLeft: 2 }}
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
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="secondary"
            >
              <MoreIcon fontSize="small" />
            </IconButton>
          </Box>
        </Toolbar>
      </Box>
      <MobileMenu
        mobileMenuId={mobileMenuId}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
      <ProfileMenu menuId={menuId} anchorEl={anchorEl} isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose} />
    </AppBar>
  );
};

export default TopBar;
