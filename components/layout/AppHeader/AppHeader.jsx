import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import Logo from '../../common/Logo/Logo';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'orangered',
  },
}));

export const AppHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Logo />
      </Toolbar>
    </AppBar>
  );
};
