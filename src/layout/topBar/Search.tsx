import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const SearchBox = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(0),
  marginLeft: theme.spacing(1),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(4),
    width: 'auto'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f8fafc',
  borderTopLeftRadius: 20,
  borderBottomLeftRadius: 20
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',

  marginLeft: 40,
  '& .MuiInputBase-input': {
    backgroundColor: '#f8fafc',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: 35,
    [theme.breakpoints.up('md')]: {
      width: 434
    },
    [theme.breakpoints.down('lg')]: {
      width: 270
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: 2
    }
  }
}));

const Search: React.FC = () => {
  return (
    <SearchBox>
      <SearchIconWrapper>
        <SearchIcon style={{}} />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
    </SearchBox>
  );
};

export default Search;
