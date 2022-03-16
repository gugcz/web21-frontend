import { Button, makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import { PartnersIcon } from '../icons/icons';
import InfoText from '../common/InfoText/InfoText';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  partnersTemporaryImage: {
    margin: spacing(4, 0),
  },
  gold: {
    display: 'flex',
    justifyContent: 'space-evenly',
    maxHeight: 80,
    '&>*': {
      objectFit: 'none',
    },
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      maxWidth: '80vw',
      maxHeight: 'initial',
      margin: spacing(4, 0),
      '&>*': {
        objectFit: 'contain',
        height: 80,
      },
    },
  },
  action: {
    marginTop: spacing(5),
    [breakpoints.down('sm')]: {
      margin: 0,
    },
  },
}));

export const PartnersSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <InfoText icon={<PartnersIcon size={80} />} title="Partneři" />
      <Box className={classes.gold}>
        <img src={'/images/partners/GWG_Logo.png'} alt="Grow with google" />
        <img src={'/images/partners/revolgy_Logo.svg'} alt="Partneři Gugu" />
      </Box>
      <Button variant={'contained'} color={'primary'} className={classes.action} href="mailto:filip@gug.cz">
        Stát se partnerem
      </Button>
    </Box>
  );
};
