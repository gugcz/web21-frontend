import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import ScorecardsBox from '../components/homePage/ScorecardsBox/ScorecardsBox';
import aboutPageData from '../data/aboutPageData';
import ImageMosaic from '../components/aboutUs/ImageMosaic';
import { PartnersSection } from '../components/PartnersSection/PartnersSection';
import InfoText from '../components/common/InfoText/InfoText';

const useStyles = makeStyles(() => ({
  root: {},
}));

const PageHeading = () => (
  <Typography variant="h1" align="center">
    Vzděláváme česko
    <br />v technologiích
  </Typography>
);

const ConnectedWithGoogleHeadline = () => (
  <Typography variant="h3" align="center">
    Napojení na Google,
    <br />
    ale nezávislí
  </Typography>
);

const About = ({ data }) => {
  const classes = useStyles();
  return (
    <Box m={4} className={classes.root}>
      <InfoText
        title={<PageHeading />}
        text="Sdílíme zájem o technologie - online, v chatu, na přednáškách i na meetupech. Jsme skupina aktivních lidí, kteří
        se navzájem vzdělávají a pomáhají si."
      />
      <ImageMosaic />
      <InfoText
        title={<ConnectedWithGoogleHeadline />}
        text="Máme ke Googlu blízko, víme o novinkách a některé naše skupiny jsou napojené na světové hnutí Googlu. Naše iniciativy se tím ale neomezují a děláme toho mnohem víc."
      />
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
