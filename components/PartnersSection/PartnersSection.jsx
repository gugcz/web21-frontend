import { Button, makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import PropTypes from 'prop-types';
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
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: 700,
    width: '100%',
    '&>*': {
      maxWidth: '50%',
      display: 'flex',
      justifyContent: 'space-evenly',
      '&>*': {
        objectFit: 'contain',
        maxWidth: '100%',
      },
    },
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      maxHeight: 'initial',
      margin: spacing(4, 0),
      '&>*': {
        objectFit: 'contain',
        height: 80,
        maxWidth: '100%',
      },
    },
  },
  action: {
    marginTop: spacing(5),
    [breakpoints.down('sm')]: {
      margin: 0,
    },
  },
  image: {
    [breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

export const PartnersSection = ({ partners = [] }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <InfoText icon={<PartnersIcon size={80} />} title="Partneři" />
      <Box className={classes.gold}>
        {partners.map(function (partner, i) {
          return (
            <a key={i} href={partner.link}>
              <img src={partner.image} alt={partner.name} className={classes.image} />
            </a>
          );
        })}
      </Box>
      <Button variant={'contained'} color={'primary'} className={classes.action} href="mailto:filip@gug.cz">
        Stát se partnerem
      </Button>
    </Box>
  );
};

PartnersSection.propTypes = {
  partners: PropTypes.array,
};
