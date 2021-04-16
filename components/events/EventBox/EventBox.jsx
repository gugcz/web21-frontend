import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import PropTypes from 'prop-types';
import NextLink from '../../common/NextLink/NextLink';

const useStyles = makeStyles(() => ({
  root: {},
}));

const EventBox = ({ slug }) => {
  const classes = useStyles();

  if (!slug) {
    return null;
  }

  return (
    <Box className={classes.root}>
      <Typography>Event info with link</Typography>
      <NextLink href={`/event/${encodeURIComponent(slug)}`}>S odkazem do události {slug}</NextLink>
    </Box>
  );
};

EventBox.propTypes = {
  slug: PropTypes.string,
};

export default EventBox;
