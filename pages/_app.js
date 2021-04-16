/* eslint-disable react/prop-types */

import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, makeStyles } from '@material-ui/core';
import theme from '../src/theme';
import { AppHeader } from '../components/layout/AppHeader/AppHeader';
import { AppFooter } from '../components/layout/AppFooter/AppFooter';

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'auto',
  },
}));

function MyApp({ Component, pageProps }) {
  const classes = useStyles();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Container className={classes.root} maxWidth={'lg'} disableGutters>
          <AppHeader />
          <Component {...pageProps} />
          <AppFooter />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
