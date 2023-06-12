import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { Button, makeStyles } from '@material-ui/core';
import { isEmpty } from 'ramda';
import EventsHeadline from '../components/events/EventsHeadline/EventsHeadline';
import EventsListBox from '../components/events/EventsListBox/EventsListBox';
import { EventsPropTypes } from '../model/events.model';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Events = () => {
  const classes = useStyles();

  const [events, setEvents] = useState({ pastEvents: [], upcomingEvents: [] });

  useEffect(() => {
    const fetchAsyncWrapper = async () => {
      setEvents(await fetchEvents());
    };
    fetchAsyncWrapper();
  }, [setEvents]);

  return (
    <Box m={4} className={classes.root}>
      <EventsHeadline />
      <h1>Již brzy</h1>
      {isEmpty(events.upcomingEvents) && <img src={'/images/gugtravolta.gif'} />}
      <EventsListBox events={events.upcomingEvents} />
      <h1>Proběhlé události</h1>
      <EventsListBox events={events.pastEvents} past />
      <Button href={'https://talkbase.io/company/gugcz/events'}>Zobrazit všechny události</Button>
    </Box>
  );
};

Events.propTypes = {
  pastEvents: EventsPropTypes,
  upcomingEvents: EventsPropTypes,
};
const fetchEvents = async () => {
  const talkBaseUrl = 'https://api.talkbase.io/api/workspace-public/gugcz/event?limit=6&offset=0&state=';
  const pastEvents = await (await fetch(`${talkBaseUrl}PAST`)).json();
  const upcomingEvents = await (await fetch(`${talkBaseUrl}UPCOMING`)).json();
  return { pastEvents, upcomingEvents };
};

export default Events;
