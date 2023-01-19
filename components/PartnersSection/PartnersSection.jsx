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
    width: '100%',
    '&>*': {
      maxWidth: '50%',
      display: 'flex',
      justifyContent: 'space-evenly',
      '&>*': {
        objectFit: 'contain',
      },
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
        <a href="">
          <img src={'/images/partners/Google_logo_Horizontal_Grey_RGB.png'} alt="Grow with google" />
        </a>
        <a href="">
          <img src={'/images/partners/SmartEmailing_logo_RGB_SmartEmailing_Color.png'} alt="Partneři Gugu" />
        </a>
      </Box>
      <Button variant={'contained'} color={'primary'} className={classes.action} href="mailto:filip@gug.cz">
        Stát se partnerem
      </Button>
    </Box>
  );
};
