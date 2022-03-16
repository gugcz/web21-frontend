import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles(({ palette, spacing, breakpoints }) => ({
  root: {
    border: '1.5px solid #D2D2D2',
    borderRadius: 6,
    padding: spacing(2),
    [breakpoints.down('sm')]: {
      borderColor: 'transparent',
    },
  },
  text: {
    maxWidth: 370,
    margin: spacing(3, 0),
    color: palette.text.secondary, //'#9A9A9A',
  },
  logoWrapper: {
    display: 'flex;',
    height: 125,
  },
  logo: {
    margin: 'auto',
    display: 'block',
  },
}));

const MoreInitiativeBox = ({ title, text, logo }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.logoWrapper}>
        <img src={logo} className={classes.logo} />
      </Box>
      <Typography variant="h6" align="center">
        {title}
      </Typography>
      <Typography variant="body1" align="center" className={classes.text}>
        {text}
      </Typography>
    </Box>
  );
};

MoreInitiativeBox.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  logo: PropTypes.string,
};

export default MoreInitiativeBox;
