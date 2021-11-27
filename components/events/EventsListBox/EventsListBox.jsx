import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import PropTypes from 'prop-types';
import { isArray } from 'ramda-adjunct';
import EventBox from '../EventBox/EventBox';
import { EventsPropTypes } from '../../../model/events.model';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: { margin: spacing(3, 0) },
  events: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(377px, 1fr))',
    gridTemplateRows: 'auto',
    '&>*': {
      margin: spacing(2),
    },
    [breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      '&>*': {
        margin: spacing(2, 0),
      },
    },
  },
}));

// todo - features like
// - filter by chapter
// - filter by ísmenko
// - show specific events by ID
// - ....

const EventsListBox = ({ events, title }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {title && <Typography variant="h2">{title}</Typography>}
      <Box className={classes.events}>
        {isArray(events) && events.map((event) => <EventBox event={event} key={event.slug} />)}
      </Box>
    </Box>
  );
};

EventsListBox.propTypes = {
  events: EventsPropTypes,
  title: PropTypes.string,
};

export default EventsListBox;
