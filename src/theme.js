import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#2B7EFB',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    chapters: {
      gdg: '#2B7EFB',
      gbg: '#00AF41',
      gxg: '#F7323F',
      geg: '#FFC629',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      app: 1280,
      lg: 1440,
      xl: 1920,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'initial',
      },
    },
  },
  gugWeb: {
    maxWidth: 1280,
  },
});

theme.typography.h1 = {
  fontSize: '4.5rem',
  fontWeight: 700,
  lineHeight: 1.167,
  letterSpacing: '-0.01562em',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.4rem',
  },
};

export default theme;
