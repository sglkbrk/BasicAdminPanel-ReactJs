import InboxIcon from '@mui/icons-material/Inbox';
import IconListDetails from '@mui/icons-material/DashboardOutlined';
import { Box, Typography, List, Drawer, ListItem, ListItemIcon, useMediaQuery } from '@mui/material';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';

import menuItems from '../../menu-items';
const linkStyle = {
  backgroundColor: 'secondary',
  '&:hover': {
    backgroundColor: 'secondary'
  },
  borderRadius: '24px'
};
interface SidebarProps {
  drawerOpen: boolean;
  drawerToggle: () => void;
}

interface menuItemschildren {
  id: string;
  title: string;
  url: string;
  icon: any;
}
interface menuItems {
  id: string;
  title: string;
  caption: string;
  children: menuItemschildren[];
}

const Sidebar: React.FC<SidebarProps> = ({ drawerOpen, drawerToggle }) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Drawer
      container={container}
      sx={{
        '& .MuiDrawer-paper': {
          width: 260,
          background: '#ffffff',
          borderRight: 'none',
          [theme.breakpoints.up('md')]: {
            top: '80px'
          }
        },
        width: 260,
        flexShrink: 0
      }}
      ModalProps={{ keepMounted: true }}
      open={matchUpMd ? true : drawerOpen}
      onClose={drawerToggle}
      variant={matchUpMd ? 'persistent' : 'temporary'}
      anchor="left"
      color="inherit"
    >
      <PerfectScrollbar component="div">
        <List className="sidebar" sx={{ width: 260 }}>
          {menuItems.map((row: menuItems) => (
            <ListItem key={row.id} sx={{ marginBottom: -1.5 }}>
              <Box sx={{ width: '100%' }}>
                <Typography variant="inherit">{row.title}</Typography>
                {row.caption && <Typography variant="caption">{row.caption}</Typography>}
                <Box sx={{ padding: 0.3 }}></Box>
                <List>
                  {row.children.map((item: menuItemschildren, index: number) => (
                    <ListItem button key={item.title} component={Link} to={item.url} sx={linkStyle}>
                      <ListItemIcon sx={{ color: 'gray', marginRight: 0, width: '1.3rm', marginLeft: 0.5 }}>
                        {index % 2 === 0 ? <InboxIcon /> : <IconListDetails />}
                      </ListItemIcon>
                      <Typography sx={{ color: '#121926', fontSize: '0.875rem', fontWeight: 500, marginLeft: -3 }} variant="subtitle2">
                        {item.title}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
                <hr style={{ borderTop: '1px #f8fafc' }} />
              </Box>
            </ListItem>
          ))}
        </List>
      </PerfectScrollbar>
    </Drawer>
  );
};

export default Sidebar;
