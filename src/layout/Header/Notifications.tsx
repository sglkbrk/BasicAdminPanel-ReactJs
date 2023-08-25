import React, { useState, useRef, useEffect } from 'react';

import { useTheme, styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';

import {
  Popper,
  useMediaQuery,
  Avatar,
  Chip,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  ClickAwayListener,
  Paper
} from '@mui/material';

interface Props {}
const Notifications: React.FC<Props> = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));
  const anchorRef = useRef(null);
  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current;
    }
    prevOpen.current = open;
  }, [open]);

  const id: any = open ? 'simple-popper' : undefined;

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClosedClick = () => {
    setOpen(false);
  };
  const chipSX = {
    height: 24,
    padding: '0 6px'
  };
  const chipErrorSX = {
    ...chipSX,
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.dark,
    marginRight: '5px'
  };
  const chipWarningSX = {
    ...chipSX,
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.error.main
  };

  const ListItemWrapper = styled('div')(({ theme }) => ({
    cursor: 'pointer', // TODO: önemli unutma
    padding: 16,
    '&:hover': {
      background: theme.palette.primary.light
    },
    '& .MuiListItem-root': {
      padding: 0
    }
  }));
  return (
    <>
      <IconButton
        ref={anchorRef}
        aria-describedby={id}
        size="large"
        onClick={handleClick}
        aria-label="show 17 Sil notifications"
        sx={{ backgroundColor: theme.palette.secondary.light, borderRadius: 3, padding: 1.2, marginLeft: 2 }}
        color="secondary"
      >
        <NotificationsIcon fontSize="small" />
      </IconButton>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorRef.current}
        placement={matchesXs ? 'bottom' : 'bottom-end'}
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [matchesXs ? 5 : 0, 22]
              }
            }
          ]
        }}
      >
        <ClickAwayListener onClickAway={handleClosedClick}>
          <Paper sx={{ borderRadius: 5, backgroundColor: theme.palette.background.paper, width: matchesXs ? 300 : 350, boxShadow: 5 }}>
            <ListItemWrapper>
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar alt="Burak Sağlık" />
                </ListItemAvatar>
                <ListItemText primary="Burak Sağlık" />
                <ListItemSecondaryAction>
                  <Grid container justifyContent="flex-end">
                    <Grid item xs={12}>
                      <Typography variant="caption" display="block" gutterBottom>
                        5 dk Önce
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItemSecondaryAction>
              </ListItem>
              <Grid container direction="column" className="list-container">
                <Grid item xs={12} sx={{ pb: 2 }}>
                  <Typography variant="subtitle2">Lorem Ipsum is simply dummy text of the printing and typesetting</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item>
                      <Chip label="Detay" sx={chipErrorSX} />
                    </Grid>
                    <Grid item>
                      <Chip label="Sil" sx={chipWarningSX} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </ListItemWrapper>
            <ListItemWrapper>
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar alt="Burak Sağlık" />
                </ListItemAvatar>
                <ListItemText primary="Burak Sağlık" />
                <ListItemSecondaryAction>
                  <Grid container justifyContent="flex-end">
                    <Grid item xs={12}>
                      <Typography variant="caption" display="block" gutterBottom>
                        5 dk Önce
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItemSecondaryAction>
              </ListItem>
              <Grid container direction="column" className="list-container">
                <Grid item xs={12} sx={{ pb: 2 }}>
                  <Typography variant="subtitle2">Lorem Ipsum is simply dummy text of the printing and typesetting</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item>
                      <Chip label="Detay" sx={chipErrorSX} />
                    </Grid>
                    <Grid item>
                      <Chip label="Sil" sx={chipWarningSX} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </ListItemWrapper>
            <ListItemWrapper>
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar alt="Burak Sağlık" />
                </ListItemAvatar>
                <ListItemText primary="Burak Sağlık" />
                <ListItemSecondaryAction>
                  <Grid container justifyContent="flex-end">
                    <Grid item xs={12}>
                      <Typography variant="caption" display="block" gutterBottom>
                        5 dk Önce
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItemSecondaryAction>
              </ListItem>
              <Grid container direction="column" className="list-container">
                <Grid item xs={12} sx={{ pb: 2 }}>
                  <Typography variant="subtitle2">Lorem Ipsum is simply dummy text of the printing and typesetting</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item>
                      <Chip label="Detay" sx={chipErrorSX} />
                    </Grid>
                    <Grid item>
                      <Chip label="Sil" sx={chipWarningSX} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </ListItemWrapper>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  );
};
export default Notifications;
