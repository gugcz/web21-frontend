import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
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
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
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
