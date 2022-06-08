import React, { useEffect, useState } from 'react';
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

  const [events, setEvents] = useState({ pastEvents, upcomingEvents });

  useEffect(async () => {
    setEvents(await fetchEvents());
  }, [setEvents, fetchEvents]);

  return (
    <Box m={4} className={classes.root}>
      <EventsHeadline />
      <h1>Již brzy</h1>
      {isEmpty(events.upcomingEvents) && <img src={'/images/gugtravolta.gif'} />}
      <EventsListBox events={upcomingEvents} />
      <h1>Proběhlé události</h1>
      <EventsListBox events={events.pastEvents} past />
    </Box>
  );
};

Events.propTypes = {
  events: EventsPropTypes,
};
const fetchEvents = async () => {
  const talkBaseUrl = 'https://public.talkbase.io/api/workspace/gugcz/event?limit=3&offset=0&state=';

  const pastEvents = await (await fetch(`${talkBaseUrl}PAST`)).json();
  const upcomingEvents = await (await fetch(`${talkBaseUrl}UPCOMING`)).json();

  return { pastEvents, upcomingEvents };
};

export async function getStaticProps() {
  return {
    props: await fetchEvents(),
  };
}

export default Events;
