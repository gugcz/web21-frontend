import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { PartnersSection } from '../components/sections/PartnersSection/PartnersSection';
import homePageData from '../data/homePageData';
import ScorecardsBox from '../components/homePage/ScorecardsBox/ScorecardsBox';
import Headline from '../components/homePage/HPHeadline/HPHeadline';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Home = ({ data }) => {
  const classes = useStyles();

  return (
    <Box m={4} className={classes.root}>
      <Headline
        label="Vzděláváme česko v&nbsp;technologiich"
        text="Jsme komunita GUGerů a hoříme pro stejnou věc: sdílet a předávat dovednosti v nových technologiích. Pořádáme
          akce a sdílíme, co umíme my a naši přednášející."
      />
      <ScorecardsBox stats={data.stats} />
      <Box>events</Box>
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
};

export async function getStaticProps() {
  return {
    props: { data: homePageData },
  };
}

export default Home;
