import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import ScorecardsBox from '../components/homePage/ScorecardsBox/ScorecardsBox';
import aboutPageData from '../data/aboutPageData';
import ImageMosaic from '../components/aboutUs/ImageMosaic';
import { PartnersSection } from '../components/PartnersSection/PartnersSection';
import InfoText from '../components/common/InfoText/InfoText';

const useStyles = makeStyles(({ spacing }) => ({
  root: {},
  leftTextRightImageBox: {
    display: 'flex',
    flexDirection: 'row',
    margin: spacing(8, 0),

    '& > *': {
      flex: 1,
    },
  },
  leftImageRightText: {
    display: 'flex',
    flexDirection: 'row-reverse',
    margin: spacing(8, 0),

    '& > *': {
      flex: 1,
    },
  },
  sectionDark: {
    //todo - low priority
    //backgroundColor: '#efefef',
    width: '100%',
  },
  sectionMargin: {
    margin: spacing(8, 0),
  },
  buttonMargin: {
    margin: spacing(2, 0),
  },
  imageBox: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    display: 'flex',
    '&> img': {
      maxHeight: '100%',
      position: 'absolute',
    },
  },
  customImageBox1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    alignItems: 'end',
    position: 'relative',
    '& > img': {
      position: 'absolute',
      '&:nth-child(1)': {
        maxHeight: '100%',
        right: '20%',
      },
      '&:nth-child(2)': {
        maxHeight: '70%',
        right: '70%',
      },
    },
  },
}));

const useFeatureListStyles = makeStyles(({ spacing }) => ({
  root: {
    '& > *': {
      backgroundColor: 'pink',
      margin: spacing(1, 0),
      '&:nth-child(1):before': {
        content: '""',
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: 'red',
      },
    },
  },
  bold: {
    fontWeight: 'bold',
  },
}));

const PageHeading = () => (
  <Typography variant="h1" align="center">
    Vzděláváme česko v cool
    <br />
    technologiích
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

const FeatureList = () => {
  const classes = useFeatureListStyles();

  return (
    <div className={classes.root}>
      <Typography>
        <Typography className={classes.bold}>Podpora aktivit</Typography> – pomůžeme vám organizovat akce, propojíma na
        správné lidi a zajistíme něco do začátku.
      </Typography>
      <Typography>
        <Typography className={classes.bold}>Propagace</Typography> – dostanete prostor se ukázat na webu.
      </Typography>
      <Typography>
        <Typography className={classes.bold}>Inspirace</Typography> – S ostatníma a od ostatních z komunity, spojujeme
        lidi, kteří spolu hoří pro technologie.
      </Typography>
    </div>
  );
};

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
        <div className={classes.imageBox}>
          <img src="/images/about/uNeverKnow.png" />
        </div>
      </Box>
      <Box className={classes.leftImageRightText}>
        <InfoText align="end" title={<TakYourTasteHeadline />} textAlign="right" text={<FeatureList />} />
        <div className={classes.imageBox}>
          <img src="/images/about/taste.png" />
        </div>
      </Box>
      <Box className={classes.leftTextRightImageBox}>
        <InfoText
          align="start"
          title="Přidáš se taky"
          textAlign="left"
          text="GUGování je o zábavě, o tom, dělat věci s ostatními, které byste beztak dělali sami, ale nyní i s podporou na mnoha různých úrovních.">
          <Button className={classes.buttonMargin} color="primary" variant="contained">
            Zhu Li, Do the thing
          </Button>
        </InfoText>
        <div className={classes.customImageBox1}>
          <img src="/images/about/zuzkaPeskova.png" />
          <img src="/images/about/petoMalina.png" />
        </div>
      </Box>
      <Box className={classes.sectionDark}>
        <InfoText title="Nemáme limity, tohle je teprve začátek" />
        <ScorecardsBox className={classes.sectionMargin} stats={data.stats} />
        <Box className={classes.leftTextRightImageBox}>
          <InfoText
            align="start"
            title={<MeaningFullSponsoringHeadline />}
            textAlign="left"
            text="Sdružujeme cílevědomé lidi se zájmem o technologie. Získejte visibilitu, najděte nové kolegy a buďte vidět. Hledáme smysluplné partnerství, tak se ná ozvěte a snad něco vymslíme.">
            <Button className={classes.buttonMargin} color="primary" variant="contained">
              Zhu Li, Do the thing
            </Button>
          </InfoText>
          <div className={classes.imageBox}>
            <img src="/images/about/sponzoring.png" />
          </div>
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
