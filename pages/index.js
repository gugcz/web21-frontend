import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import homePageData from '../data/homePageData';
import ScorecardsBox from '../components/homePage/ScorecardsBox/ScorecardsBox';
import Headline from '../components/homePage/HPHeadline/HPHeadline';
import EventsListBox from '../components/events/EventsListBox/EventsListBox';
import { EventsPropTypes } from '../model/events.model';
import eventsMockData from '../data/eventsData';
import { PartnersSection } from '../components/PartnersSection/PartnersSection';
import { NewsletterForm } from '../components/NesletterForm/NesletterForm';
import { Nokia } from '../components/Nokia/Nokia';
import InitiativeBox from '../components/homePage/InitiativeBox/InitiativeBox';

const useStyles = makeStyles(() => ({
  root: {},
  initiative: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      width: '50%',
    },
  },
}));

const Home = ({ data, events }) => {
  const classes = useStyles();

  return (
    <Box m={2} className={classes.root}>
      <Headline />
      <ScorecardsBox stats={data.stats} />
      <EventsListBox events={events} title="Nejbližší události" />
      <Nokia />

      <Box className={classes.initiative}>
        <InitiativeBox
          variant="blue"
          title="Pro vývoj"
          groups={data.groups.gdg}
          text="Vývojářky, dataři, scrum masterky, testeři, kodérky… Nejsi na seznamu? Doplň naše řady a staň se součástí komunity, která nemá technologické hranice. Od meetupů přes garáže, přednášky a workshopy až po Devfest - mezinárodní konferenci, kde potkáš taky Google Developer Experty. GUG jich má hned několik a rádi ti pomůžeme stát se dalším. "
        />
        <InitiativeBox
          variant="yellow"
          title="Pro vzdělávání"
          groups={data.groups.geg}
          text="Technologie do škol, do výuky, k dětem.  My učitelé a ředitelky si malé cíle nedáváme. Kočujeme po konferencích a vzdělávacích akcích, v rukách iPady a Chromebooky, předáváme své know-how. Díky komunitě učíme sami sebe, žáky i další učitele."
        />
        <InitiativeBox
          variant="green"
          title="Pro podnikání"
          groups={data.groups.gbg}
          text="Markeťačky, obchodnice, freelanceři, manažeky či majitelky firem. Všechny nás pohání stejná vášeň - prosperující podnikání nebo firma. Technologické vychytávky a přináležitost ke komunitě nám pomáhají dosahovat cílů, ať už jsou jakékoliv. Radíme si, inspirujeme se a rosteme společně."
        />
        <InitiativeBox
          variant="red"
          title="Pro geekaření"
          groups={data.groups.gxg}
          text="Zážitky a zábava i pomoc veřejnému prostoru, proto tady jsme. Nezáleží na tom, co používáš a jak si daleko, důležité je nadšení pro věc. Plníme mapy, píšeme recenze na místa i technologické vychytávky. Zkoušíme novinky, pořádáme akce i soutěže. "
        />
      </Box>
      <Box>Další písmenka</Box>
      {/* todo - add later <Box>Komunita</Box> */}
      <NewsletterForm />
      <PartnersSection />
    </Box>
  );
};

Home.propTypes = {
  data: PropTypes.exact({
    stats: PropTypes.object,
    groups: PropTypes.object,
  }),
  events: EventsPropTypes,
};

export async function getStaticProps() {
  return {
    props: { data: homePageData, events: eventsMockData },
  };
}

export default Home;
