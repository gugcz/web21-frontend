import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  root: {
    display: 'flex',
    height: 64,
    alignItems: 'center',
    [breakpoints.down('sm')]: {
      height: 48,
    },
  },
  icon: {
    [breakpoints.down('sm')]: {
      maxWidth: '.6em',
    },
    [breakpoints.down(374)]: {
      maxWidth: '.5em',
    },
  },
  meta: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: spacing(2),
    overflow: 'hidden',
    height: '100%',
    [breakpoints.down('sm')]: {
      marginLeft: spacing(1),
    },
  },
  value: {
    fontWeight: 700,
    [breakpoints.down('sm')]: {
      fontSize: '1.6rem',
    },
    [breakpoints.down(374)]: {},
  },
  label: {
    //todo color
    fontSize: '.8rem',
    color: palette.text.hint,
    paddingLeft: spacing(0.5),
    [breakpoints.down('sm')]: {
      fontSize: '.6rem',
    },
  },
}));

const ScoreCard = ({ icon: Icon, label, value, iconSize = 55 }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Icon className={classes.icon} style={{ fontSize: iconSize }} />
      <Box className={classes.meta}>
        <Typography variant={'h4'} className={classes.value}>
          {value}
        </Typography>
        <Typography className={classes.label}>{label}</Typography>
      </Box>
    </Box>
  );
};

ScoreCard.propTypes = {
  icon: PropTypes.elementType,
  label: PropTypes.string,
  value: PropTypes.number,
  iconSize: PropTypes.number,
};

export default ScoreCard;
