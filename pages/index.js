import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { PartnersSection } from '../components/sections/PartnersSection/PartnersSection';
import ScoreCard from '../components/common/ScoreCard/ScoreCard';
import { HatIcon, KioskIcon, LocationIcon, PersonIcon } from '../components/icons/icons';
import homePageData from '../data/homePageData';

const useStyles = makeStyles(() => ({
  root: {},
  scorecards: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const Home = ({ stats }) => {
  const classes = useStyles();

  return (
    <Box m={4} className={classes.root}>
      <Box>headlineIntro</Box>
      <Box className={classes.scorecards}>
        <ScoreCard icon={HatIcon} label="Lidí jsme vzdělali" value={stats.visitors} iconSize={96} />
        <ScoreCard icon={LocationIcon} label="Uspořádaných akcí" value={stats.events} iconSize={65} />
        <ScoreCard icon={PersonIcon} label="Nových gugerů" value={stats.gugers} />
        <ScoreCard icon={KioskIcon} label="Měst kde působíme" value={stats.cities} />
      </Box>
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
  stats: PropTypes.shape({
    visitors: PropTypes.number,
    events: PropTypes.number,
    cities: PropTypes.number,
    gugers: PropTypes.number,
  }),
};

export async function getStaticProps() {
  return {
    props: { stats: homePageData.stats },
  };
}

export default Home;
