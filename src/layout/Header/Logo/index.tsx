import { Box, Typography } from '@mui/material';
const Logo: React.FC = () => {
  return (
    <Box sx={{ width: 200, display: { xs: 'none', md: 'flex' } }}>
      <Typography variant="h5" component="div">
        LOGO
      </Typography>
    </Box>
  );
};

export default Logo;
