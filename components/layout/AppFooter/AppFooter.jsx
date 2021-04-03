import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'aqua',
  },
}));

export const AppFooter = () => {
  const classes = useStyles();

  return <Typography className={classes.root}>Footer</Typography>;
};
