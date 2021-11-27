import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { PartnersSection } from '../components/sections/PartnersSection/PartnersSection';
import ScorecardsBox from '../components/homePage/ScorecardsBox/ScorecardsBox';
import aboutPageData from '../data/aboutPageData';

const About = ({ data }) => {
  return (
    <Box m={4}>
      <Box>Title with text - BIG</Box>
      <Box>image container</Box>
      <Box>Title with text - NORMAL</Box>
      <Box>Title with text and picture - LEFT</Box>
      <Box>Title with text and picture - RIGHT</Box>
      <Box>Title with text and picture and action - LEFT</Box>
      <Box>
        Sponzoring
        <ScorecardsBox stats={data.stats} />
        <Box>Title with text and picture and action - LEFT</Box>
      </Box>
      <PartnersSection />
    </Box>
  );
};

About.propTypes = {
  data: PropTypes.exact({
    stats: PropTypes.object,
  }),
};

export async function getStaticProps() {
  return {
    props: { data: aboutPageData },
  };
}

export default About;
