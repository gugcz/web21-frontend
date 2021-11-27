import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { PartnersSection } from '../components/sections/PartnersSection/PartnersSection';
import homePageData from '../data/homePageData';
import ScorecardsBox from '../components/homePage/ScorecardsBox/ScorecardsBox';
import Headline from '../components/homePage/HPHeadline/HPHeadline';
import EventsListBox from '../components/events/EventsListBox/EventsListBox';
import { EventsPropTypes } from '../model/events.model';
import eventsMockData from '../data/eventsData';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Home = ({ data, events }) => {
  const classes = useStyles();

  return (
    <Box m={2} className={classes.root}>
      <Headline />
      <ScorecardsBox stats={data.stats} />
      <EventsListBox events={events} title="Nejbližší události" />
      <Box>connection</Box>
      <Box>písmenka</Box>
      <Box>Další písmenka</Box>
      <Box>Komunita</Box>
      <Box>Newsletter</Box>
      <PartnersSection />
    </Box>
  );
};

Home.propTypes = {
  data: PropTypes.exact({
    stats: PropTypes.object,
  }),
  events: EventsPropTypes,
};

export async function getStaticProps() {
  return {
    props: { data: homePageData, events: eventsMockData },
  };
}

export default Home;
