import { Button, makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import { PartnersIcon } from '../icons/icons';
import InfoText from '../common/InfoText/InfoText';

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
      <InfoText icon={<PartnersIcon size={80} />} title="Partneři" />
      <img className={classes.partnersTemporaryImage} src={'/images/PartnersTemporary.png'} alt="Partneři Gugu" />
      <Button variant={'contained'} color={'primary'}>
        Stát se partnerem
      </Button>
    </Box>
  );
};
