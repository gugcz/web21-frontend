import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import { isEmpty } from 'ramda';
import EventsHeadline from '../components/events/EventsHeadline/EventsHeadline';
import EventsListBox from '../components/events/EventsListBox/EventsListBox';
import { EventsPropTypes } from '../model/events.model';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Events = ({ pastEvents, upcomingEvents }) => {
  const classes = useStyles();

  return (
    <Box m={4} className={classes.root}>
      <EventsHeadline />
      {false && <Box>filters</Box>}
      <h1>Již brzy</h1>
      {isEmpty(upcomingEvents) && <img src={'/images/gugtravolta.gif'} />}
      <EventsListBox events={upcomingEvents} />
      <h1>Proběhlé události</h1>
      <EventsListBox events={pastEvents} />
    </Box>
  );
};

Events.propTypes = {
  events: EventsPropTypes,
};

export async function getStaticProps() {
  const talkBaseUrl = 'https://public.talkbase.io/api/workspace/gugcz/event?limit=3&offset=0&state=';

  const pastEvents = await (await fetch(`${talkBaseUrl}PAST`)).json();
  const upcomingEvents = await (await fetch(`${talkBaseUrl}UPCOMING`)).json();

  return {
    props: { pastEvents, upcomingEvents },
  };
}

export default Events;
