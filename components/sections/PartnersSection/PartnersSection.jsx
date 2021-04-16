import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {},
}));

export const PartnersSection = () => {
  const classes = useStyles();

  return <Box className={classes.root}>Komponenta Partneři</Box>;
};
