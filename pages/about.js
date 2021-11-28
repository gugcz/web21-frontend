import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import ScorecardsBox from '../components/homePage/ScorecardsBox/ScorecardsBox';
import aboutPageData from '../data/aboutPageData';
import ImageMosaic from '../components/aboutUs/ImageMosaic';
import { PartnersSection } from '../components/PartnersSection/PartnersSection';
import InfoText from '../components/common/InfoText/InfoText';

const useStyles = makeStyles(() => ({
  root: {},
  leftTextRightImageBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftImageRightText: {
    display: 'flex',
    flexDirection: 'row',
  },
  sectionDark: {
    backgroundColor: '#efefef',
    width: '100%',
  },
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
    <br /> ale nezávislí
  </Typography>
);

const YouNeverKnowHeadline = () => (
  <Typography variant="h3" align="left">
    Nikdy nevíš, co ti
    <br /> komunita přinese
  </Typography>
);

const TakYourTasteHeadline = () => (
  <Typography variant="h3" align="right">
    Vezměte si z toho na <br /> co máte chuť
  </Typography>
);

const MeaningFullSponsoringHeadline = () => (
  <Typography variant="h3" align="left">
    Sponzoring, který
    <br /> dává smysl
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
      <Box className={classes.leftTextRightImageBox}>
        <InfoText
          align="start"
          title={<YouNeverKnowHeadline />}
          textAlign="left"
          text="Podmínky nejsou skoro žádné a výhody mnohé! Proč se přidat k některé skupině nebo si založit vlastní? Potkáte s lidmi se zájmem o internet a Google aplikace. Dozvíte se o nejnovějších technologiích a budete součástí Google komunity, nebo se dokonce můžete stát Google expertem."
        />
        VPRAVO BUDE OBRáZEK
      </Box>
      <Box className={classes.leftImageRightText}>
        VLEVO BUDE OBR8ZEK
        <InfoText align="end" title={<TakYourTasteHeadline />} textAlign="right" text="seznam" />
      </Box>
      <Box className={classes.leftTextRightImageBox}>
        <InfoText
          align="start"
          title="Pridáš se taky"
          textAlign="left"
          text="GUGování je o zábavě, o tom, dělat věci s ostatními, které byste beztak dělali sami, ale nyní i s podporou na mnoha různých úrovních.">
          <Button color="primary" variant="contained">
            Zhu Li, Do the thing
          </Button>
        </InfoText>
        VPRAVO BUDE OBRáZEK
      </Box>
      <Box className={classes.sectionDark}>
        <InfoText title="Nemáme limity, tohle je teprve začátek" />
        <ScorecardsBox stats={data.stats} />
        <Box className={classes.leftTextRightImageBox}>
          <InfoText
            align="start"
            title={<MeaningFullSponsoringHeadline />}
            textAlign="left"
            text="Sdružujeme cílevědomé lidi se zájmem o technologie. Získejte visibilitu, najděte nové kolegy a buďte vidět. Hledáme smysluplné partnerství, tak se ná ozvěte a snad něco vymslíme.">
            <Button color="primary" variant="contained">
              Zhu Li, Do the thing
            </Button>
          </InfoText>
          VPRAVO BUDE OBRáZEK
        </Box>
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
