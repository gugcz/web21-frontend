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
import InitiativeBox from '../components/homePage/InitiativeBox/InitiativeBox';
import PieChartIcon from '../components/icons/PieChartIcon';
import InfoText from '../components/common/InfoText/InfoText';
import MoreInitiativeBox from '../components/homePage/MoreInitiativeBox/MoreInitiativeBox';

const useStyles = makeStyles(({ spacing }) => ({
  root: {},
  initiative: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      width: '50%',
    },
  },
  moreInitiatives: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      maxWidth: `calc(33% - ${spacing(2 * 2)}px)`,
      margin: spacing(0, 2),
    },
  },
}));

const Home = ({ data, events }) => {
  const classes = useStyles();

  return (
    <Box m={2} className={classes.root}>
      <Headline />
      <ScorecardsBox stats={data.stats} />
      {false && <EventsListBox events={events} title="Nejbližší události" />}

      <InfoText
        icon={<PieChartIcon size={80} />}
        title="Spojují nás technologie"
        text="Máme společnou vášeň i úkol. Rozvíjet sebe a ostatní členy komunity tak, aby technologiím vládli a nenechali se
      jimi ovládat."
      />

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
      <Box>
        <InfoText title="Naše další iniciativy" />
        <Box className={classes.moreInitiatives}>
          <MoreInitiativeBox
            logo="/images/logos/Women_Techmakers.png"
            title="Women techmakers"
            text="Každý rok projdou našimi programy tisíce žen, které dobře připravíme na kariéru v IT."
          />
          <MoreInitiativeBox
            logo="/images/logos/Women_Will.png"
            title="Women Will"
            text="Pomáháme ženám z celého světa dosáhnout stejných podmínek, jako mají muži. "
          />
          <MoreInitiativeBox
            logo="/images/logos/GUG_TV.png"
            title="GUG.tv"
            text="Tady se o společenstvu dozvíš první poslední. Máme tu videa, články, live talky, a dokonce vlastní GUGcast."
          />
        </Box>
      </Box>

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
