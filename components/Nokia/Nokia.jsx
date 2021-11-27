import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import PieChartIcon from '../icons/PieChartIcon';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: spacing(10, 0),
  },
  text: {
    maxWidth: 500,
  },
}));

export const Nokia = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <PieChartIcon size={80} />
      <Typography variant={'h3'}>Spojují nás technologie</Typography>
      <Typography variant={'body2'} className={classes.text} align={'center'}>
        Máme společnou vášeň i úkol. Rozvíjet sebe a ostatní členy komunity tak, aby technologiím vládli a nenechali se
        jimi ovládat.
      </Typography>
    </Box>
  );
};
