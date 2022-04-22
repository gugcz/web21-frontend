/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, makeStyles } from '@material-ui/core';
import theme from '../src/theme';
import { AppHeader } from '../components/layout/AppHeader/AppHeader';
import { AppFooter } from '../components/layout/AppFooter/AppFooter';

const useStyles = makeStyles(({}) => ({
  root: {
    maxWidth: 1280, //todo - get it from theme - customized theme is not available here :(
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
        <title>Gug.cz - Vzděláváme česko v technologiích</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Container className={classes.root} disableGutters>
          <AppHeader />
          <Component {...pageProps} />
        </Container>
        <AppFooter />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
