import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import EventBox from '../components/events/EventBox/EventBox';
import EventsHeadline from '../components/events/EventsHeadline/EventsHeadline';
import events from '../data/eventsData';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  eventWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(377px, 1fr))',
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

const Events = ({ events }) => {
  const classes = useStyles();

  return (
    <Box m={4}>
      <EventsHeadline />
      <Box>filters</Box>
      <Box className={classes.eventWrapper}>
        {events && events.map((event) => <EventBox event={event} key={event.slug} />)}
      </Box>
    </Box>
  );
};

export const singleEventPropType = {
  stats: PropTypes.object,
  chapterId: PropTypes.any,
  chapterName: PropTypes.any,
  eventName: PropTypes.any,
  date: PropTypes.any,
  address: PropTypes.any,
  slug: PropTypes.any,
  intro: PropTypes.any,
  location: PropTypes.any,
  image: PropTypes.any,
  regLink: PropTypes.any,
  mdText: PropTypes.any,
  organizers: PropTypes.any,
  eventId: PropTypes.any,
  chapterCode: PropTypes.any,
  timeStart: PropTypes.any,
  timeEnd: PropTypes.any,
};

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape(singleEventPropType)),
};

export async function getStaticProps() {
  return {
    props: { events: events },
  };
}

export default Events;
