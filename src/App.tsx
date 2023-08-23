import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import NavigationScroll from './layout/NavigationScroll';
import Routes from './routes';
import themes from './themes';
export const initialState = {
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: '23'
};
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(initialState)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes></Routes>
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
