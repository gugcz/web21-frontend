import React from 'react';
import { Button, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import ScorecardsBox from '../components/homePage/ScorecardsBox/ScorecardsBox';
import aboutPageData from '../data/aboutPageData';
import ImageMosaic from '../components/aboutUs/ImageMosaic';
import { PartnersSection } from '../components/PartnersSection/PartnersSection';
import InfoText from '../components/common/InfoText/InfoText';
import NextLink from '../components/common/NextLink/NextLink';
import Dot from '../components/common/Dot/Dot';
import { logoVariant } from '../components/common/ChapterLogo/ChapterLogo';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    '& > *': {
      margin: spacing(10, 0),
      [breakpoints.down('sm')]: {
        margin: spacing(5, 0),
      },
    },
  },
  leftTextRightImageBox: {
    display: 'flex',
    flexDirection: 'row',

    '& > *': {
      flex: 1,
    },

    [breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  leftImageRightText: {
    display: 'flex',
    flexDirection: 'row-reverse',

    '& > *': {
      flex: 1,
    },

    [breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  sectionDark: {
    //todo - low priority
    //backgroundColor: '#efefef',
    width: '100%',
  },
  sectionMargin: {},
  buttonMargin: {
    margin: spacing(2, 0),
  },
  imageBox: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    display: 'flex',
    '&> img': {
      maxWidth: '100%',
      objectFit: 'contain',
    },
  },
  customImageBox1: {
    minHeight: 335,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    alignItems: 'end',
    position: 'relative',
    '& > img': {
      [breakpoints.up('md')]: {
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
      [breakpoints.down('sm')]: {
        '&:nth-child(1)': {
          maxWidth: '100%',
          objectFit: 'contain',
        },
        '&:nth-child(2)': {
          display: 'none',
        },
      },
    },
  },
  mobileHeadline: {
    [breakpoints.down('sm')]: {
      textAlign: 'left',
      fontSize: '2.1rem',
    },
  },
}));

const useFeatureListStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    maxWidth: '70%',
    '& > *': {
      backgroundColor: '#F7F7F7',
      margin: spacing(1, 0),
      padding: spacing(1),
      fontSize: '.8rem',
    },
    [breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  bold: {
    fontWeight: 'bold',
  },
}));

const PageHeading = () => (
  <Typography variant="h1" align="center">
    Vzd??l??v??me ??esko v
    <br />
    technologi??ch
  </Typography>
);

const ConnectedWithGoogleHeadline = () => (
  <Typography variant="h2" align="center">
    Napojen?? na Google,
    <br /> ale nez??visl??
  </Typography>
);

const YouNeverKnowHeadline = () => (
  <Typography variant="h2" align="left">
    Komunita, co ti
    <br /> zm??n?? ??ivot
  </Typography>
);

// eslint-disable-next-line react/prop-types
const TakYourTasteHeadline = ({ className }) => (
  <Typography variant="h2" className={className}>
    V??nuj sv??j ??as komunit?? <br /> a z??skej
  </Typography>
);

const MeaningFullSponsoringHeadline = () => (
  <Typography variant="h2" align="left">
    Sponzoring, kter??
    <br /> d??v?? smysl
  </Typography>
);

const FeatureList = () => {
  const classes = useFeatureListStyles();

  return (
    <div className={classes.root}>
      <Typography>
        <Dot />
        <b>Podporu aktivit</b> ??? pom????eme ti organizovat akce, propoj??me t?? se spr??vn??mi lidi a zajist??me n??co do
        za????tku.
      </Typography>
      <Typography>
        <Dot variant={logoVariant.GBG} />
        <b>Propagaci</b> ??? dostane?? prostor se uk??zat na webu, na soci??ln??ch s??t??ch nebo v m??di??ch.
      </Typography>
      <Typography>
        <Dot variant={logoVariant.GEG} />
        <b>Inspiraci</b> ??? z??skej n??pady i zp??tnou vazbu od ostatn??ch z komunity a stoupej ke hv??zd??m.
      </Typography>
    </div>
  );
};

const About = ({ data }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isTabletAndBelow = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box m={4} className={classes.root}>
      <InfoText
        title={<PageHeading />}
        text="Jsme komunita nad??enc??, kte???? nezi??tn?? pom??haj?? vzd??l??v??n??m a ??????en??m technologick??ho pokroku."
      />
      <ImageMosaic />
      <InfoText
        title={<ConnectedWithGoogleHeadline />}
        text="M??me ke Googlu bl??zko ??? v??me o novink??ch a jsme napojen?? na sv??tov?? programy pro Google komunity. N??kter?? glob??ln?? iniciativy jsme dokonce nastartovali tady v ??ech??ch. To n??s ale nijak nebrzd?? ve vlastn??ch n??padech a projektech."
      />
      <Box className={classes.leftTextRightImageBox}>
        <InfoText
          align="start"
          title={<YouNeverKnowHeadline />}
          textAlign="left"
          text="Ka??d?? rok v GUGu vznikaj?? nov?? p????telstv??, projekty a dokonce firmy. V GUGu m??me Google Certified Trainers i Google Experty. S nad??en??m podporujeme nov????ky, a?? u?? do sv??ta (nejen) technologi?? teprve pronikaj??, nebo u?? cht??j?? svoje zku??enosti p??ed??vat. Chce?? se nau??it organizovat akce, p??edn????et nebo se chyst???? na certifikaci? P??idej se k n??kter?? skupin?? nebo si zalo?? vlastn?? a vzd??l??vej ??esko i sebe. Je jedno, kterou cestou se vyd????, v??dycky ti najdeme mentora, aby tv?? prvn?? kroky s GUGem byly hra??ka."
        />
        <div className={classes.imageBox}>
          <img src="/images/about/uNeverKnow.png" />
        </div>
      </Box>
      <Box className={classes.leftImageRightText}>
        <InfoText
          align={isTabletAndBelow ? 'start' : 'end'}
          title={<TakYourTasteHeadline className={classes.mobileHeadline} />}
          textAlign="right"
          text={<FeatureList />}
        />
        <div className={classes.imageBox}>
          <img src="/images/about/taste.png" />
        </div>
      </Box>
      <Box className={classes.leftTextRightImageBox}>
        <InfoText
          align="start"
          title="Chce?? mezi n??s?"
          textAlign="left"
          text="Chce?? se p??idat? Svoji j??zdu za??ni t??m, ??e nap????e?? na info@gug.cz a pak u?? pojedeme spole??n??.">
          <Button
            color="primary"
            variant="contained"
            component={NextLink}
            className={classes.buttonMargin}
            href="https://docs.google.com/forms/d/e/1FAIpQLSfjS6fGLijDDw-kk5VAtk67u9AGsmjqyhOZvAwz6T5suj-jdQ/viewform"
            target="_blank"
            rel="noopener">
            Jdu do toho s v??mi!
          </Button>
        </InfoText>
        <div className={classes.customImageBox1}>
          <img src="/images/about/zuzkaPeskova.png" />
          <img src="/images/about/petoMalina.png" />
        </div>
      </Box>
      <ScorecardsBox className={classes.sectionMargin} stats={data.stats} />
      <Box className={classes.leftTextRightImageBox}>
        <InfoText
          align="start"
          title={<MeaningFullSponsoringHeadline />}
          textAlign="left"
          text="GUG sdru??uje nad??ence do technologi??, program??torky, seniorn?? l??dry a specialistky nebo u??itele. M??me certifikace jako je Google Developer Expert nebo Google Certified Trainer a neboj??me se je pou????t. M??me zku??enosti a aktivn?? pracujeme s diverzitou. Um??me po????dat meetupy i mezin??rodn?? konference. Hled??me smyslupn?? partnerstv?? nejen s technologick??mi spole??nostmi. Pomozte n??m vzd??l??vat ??esko, najd??te nov?? kolegy a bu??te vid??t.">
          <Button color="primary" variant="contained" className={classes.buttonMargin} href="mailto:filip@gug.cz">
            Chci v??d??t v??c
          </Button>
        </InfoText>
        <div className={classes.imageBox}>
          <img src="/images/about/sponzoring.png" />
        </div>
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
