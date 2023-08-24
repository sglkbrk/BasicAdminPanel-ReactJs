import React from 'react';

import { Box, Popper, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
interface Props {
  id: any;
  anchorEl: null | HTMLElement;
  open: boolean;
}
const Notifications: React.FC<Props> = ({ id, anchorEl, open }) => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      sx={{
        ml: 2,
        mr: 5,
        [theme.breakpoints.down('md')]: {
          mr: 2,
          ml: 5
        }
      }}
    >
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement={matchesXs ? 'bottom' : 'bottom-end'}
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [matchesXs ? 5 : 0, 100]
              }
            }
          ]
        }}
      >
        <Box sx={{ backgroundColor: 'red', width: matchesXs ? '80%' : '1%' }}>
          The conwetent of the Poppernwetent of the Poppernwetent of the Poppernwetent of the Poppernwetent of the Poppernwetent of the
          Poppernwetent of the Popperwda.
        </Box>
      </Popper>
    </Box>
  );
};
export default Notifications;
