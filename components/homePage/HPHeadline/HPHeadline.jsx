import { Button, makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  root: {
    margin: spacing(5, 0),
    display: 'flex',
    flexDirection: 'row',
    '& > *': {
      flex: 1,
    },
  },
  content: {
    margin: spacing(15, 0, 0),
  },
  text: {
    margin: spacing(4, 0),
    maxWidth: '50%',
  },
  actions: {
    '&>*': {
      margin: spacing(0, 1),
    },
  },
  imageBox: {
    position: 'relative',
    textAlign: 'right',
    right: spacing(-4),
  },
}));

const HPHeadline = ({ label, text }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Typography variant="h1">{label}</Typography>
        <Typography component="div" variant="caption" className={classes.text} color="textSecondary">
          {text}
        </Typography>
        <Box className={classes.actions}>
          <Button color="primary" variant="contained">
            Prozkoumej Eventy
          </Button>
          <Button variant="contained">Přidej se k nám</Button>
        </Box>
      </Box>
      <Box className={classes.imageBox}>
        <img src="/images/hp/headline.png" />
      </Box>
    </Box>
  );
};

HPHeadline.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
};

export default HPHeadline;
