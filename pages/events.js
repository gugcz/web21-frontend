import React from 'react';
import Box from '@material-ui/core/Box';
import EventBox from '../components/events/EventBox/EventBox';
import EventsHeadline from '../components/events/EventsHeadline/EventsHeadline';

export default function Events() {
  return (
    <Box m={4}>
      <EventsHeadline />
      <Box>filters</Box>
      <Box>
        events
        <EventBox slug="prvni-event" />
        <EventBox slug="druhy-event" />
        <EventBox slug="treti-event" />
        <EventBox slug="ctvrty-event" />
      </Box>
    </Box>
  );
}
