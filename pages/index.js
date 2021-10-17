import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { PartnersSection } from '../components/sections/PartnersSection/PartnersSection';
import homePageData from '../data/homePageData';
import ScorecardsBox from '../components/homePage/ScorecardsBox/ScorecardsBox';
import Headline from '../components/homePage/HPHeadline/HPHeadline';
import EventsListBox from '../components/events/EventsListBox/EventsListBox';
import events from '../data/eventsData';
import { EventBoxPropTypes } from '../components/events/EventBox/EventBox';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Home = ({ data }) => {
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
  data: PropTypes.shape({
    stats: PropTypes.object,
  }),
  events: EventBoxPropTypes,
};

export async function getStaticProps() {
  return {
    props: { data: homePageData, events: events },
  };
}

export default Home;
