import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import EventsHeadline from '../components/events/EventsHeadline/EventsHeadline';
import EventsListBox from '../components/events/EventsListBox/EventsListBox';
import { EventsPropTypes } from '../model/events.model';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Events = ({ events }) => {
  const classes = useStyles();

  return (
    <Box m={4} className={classes.root}>
      <EventsHeadline />
      {false && <Box>filters</Box>}
      <EventsListBox events={events} />
    </Box>
  );
};

Events.propTypes = {
  events: EventsPropTypes,
};

export async function getStaticProps() {
  const res = await fetch('https://public.talkbase.io/api/workspace/gugcz/event?limit=3&offset=0&state=PAST');
  const posts = await res.json();

  return {
    props: { events: posts },
  };
}

export default Events;
