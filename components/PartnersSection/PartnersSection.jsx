import { Button, makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import { PartnersIcon } from '../icons/icons';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  partnersTemporaryImage: {
    margin: spacing(4, 0),
  },
}));

export const PartnersSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <PartnersIcon size={80} />
      <Typography variant={'h3'}>Partneři</Typography>
      <img className={classes.partnersTemporaryImage} src={'/images/PartnersTemporary.png'} alt="Partneři Gugu" />
      <Button variant={'contained'} color={'primary'}>
        Stát se partnerem
      </Button>
    </Box>
  );
};
