import { createTheme } from '@mui/material/styles';

// assets
// TODO: tek seferde yükleme yapılabilir mi bakılacak
import colors1 from '../assets/scss/_themes-vars.module.scss';
// import colors2 from 'assets/scss/_themes-vars.module1.scss';

// project imports
// import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = (customization: any) => {
  const color = colors1;
  const themeOption = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: color.grey200,
    customization
  };

  interface ThemeOptions {
    direction: 'ltr' | 'rtl';
    palette: any;
    typography: any;
    mixins: any;
  }

  const themeOptions: ThemeOptions = {
    direction: 'ltr',
    palette: themePalette(themeOption),
    typography: themeTypography(themeOption),
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '13px',
        '@media (min-width: 600px)': {
          minHeight: '48px'
        }
      }
    }
  };

  // const themeOptions = {
  //   direction: 'ltr',
  //   palette: themePalette(themeOption),
  //   typography: themeTypography(themeOption)
  // };

  const themes = createTheme(themeOptions);
  // themes.components = componentStyleOverrides(themeOption);

  return themes;
};

export default theme;
