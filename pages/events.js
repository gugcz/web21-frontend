import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import EventBox from '../components/events/EventBox/EventBox';
import EventsHeadline from '../components/events/EventsHeadline/EventsHeadline';
import events from '../data/eventsData';

const Events = ({ events }) => {
  return (
    <Box m={4}>
      <EventsHeadline />
      <Box>filters</Box>
      <Box>{events && events.map((event) => <EventBox {...event} key={event.slug} />)}</Box>
    </Box>
  );
};

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
};

export async function getStaticProps() {
  return {
    props: { events: events },
  };
}

export default Events;
