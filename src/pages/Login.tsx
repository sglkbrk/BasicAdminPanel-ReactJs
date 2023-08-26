import React, { useState } from 'react';
import { TextField, Button, Container, Typography, CssBaseline, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const theme = useTheme();
  const container = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  };
  const paper = {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };
  const form = {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  };
  const submit = {
    margin: theme.spacing(3, 0, 2)
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Burada giriş işlemlerini yapabilirsiniz.
    console.log('Kullanıcı Adı:', username);
    console.log('Şifre:', password);
  };

  return (
    <Container component="main" maxWidth="xs" sx={container}>
      <CssBaseline />
      <Box sx={paper}>
        <Typography component="h1" variant="h5">
          HOŞGELDİNİZ
        </Typography>
        <form style={form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Kullanıcı Adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Şifre"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" component={Link} to="/" fullWidth variant="contained" color="primary" sx={submit}>
            Giriş Yap
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
