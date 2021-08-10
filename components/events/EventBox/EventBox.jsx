import { Button, makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import PropTypes from 'prop-types';
import NextLink from '../../common/NextLink/NextLink';

export const EventBoxPropTypes = PropTypes.shape({
  slug: PropTypes.string,
});

const useStyles = makeStyles(() => ({
  root: {
    border: '1.5px solid #00AF41',
    borderRadius: 6,
  },
  rvsp: {
    width: '80%',
  },
}));

const EventBox = ({ slug }) => {
  const classes = useStyles();

  if (!slug) {
    return null;
  }

  return (
    <Box className={classes.root}>
      <Typography>Event info with link</Typography>
      <Button
        className={classes.rvsp}
        variant="contained"
        component={NextLink}
        href={`/event/${encodeURIComponent(slug)}`}>
        Chytit Covid na eventu
      </Button>
    </Box>
  );
};

EventBox.propTypes = EventBoxPropTypes;

export default EventBox;
