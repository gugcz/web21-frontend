import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    display: 'flex',
    height: 64,
    overflow: 'hidden',
    alignItems: 'center',
    margin: spacing(0, 2),
  },
  meta: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: spacing(2),
  },
  value: {
    fontWeight: 700,
  },
  label: {
    //todo color
    fontSize: '.8rem',
    color: palette.text.hint,
    paddingLeft: spacing(0.5),
  },
}));

const ScoreCard = ({ icon: Icon, label, value, iconSize = 55 }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Icon style={{ fontSize: iconSize }} />
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
  value: PropTypes.string,
  iconSize: PropTypes.number,
};

export default ScoreCard;
