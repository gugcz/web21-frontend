import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import Logo from '../../common/Logo/Logo';

const useStyles = makeStyles(() => ({
  title: {
    backgroundColor: 'blue',
  },
}));

export const AppHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Logo />
      </Toolbar>
    </AppBar>
  );
};
