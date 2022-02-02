import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import EventsHeadline from '../components/events/EventsHeadline/EventsHeadline';
import events from '../data/eventsData';
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
      <Box>filters</Box>
      <EventsListBox events={events} />
    </Box>
  );
};

Events.propTypes = {
  events: EventsPropTypes,
};

export async function getStaticProps() {
  return {
    props: { events: events },
  };
}

export default Events;
