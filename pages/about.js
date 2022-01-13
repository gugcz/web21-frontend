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

const useFeatureListStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    '& > *': {
      backgroundColor: '#F7F7F7',
      margin: spacing(1, 0),
      padding: spacing(1),
      fontSize: '.8rem',
      '&:before': {
        content: '""',
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'red',
        display: 'inline-block',
        marginRight: spacing(1),
      },
      '&:nth-child(1):before': {
        backgroundColor: palette.chapters.gdg,
      },
      '&:nth-child(2):before': {
        backgroundColor: palette.chapters.geg,
      },
      '&:nth-child(3):before': {
        backgroundColor: palette.chapters.gxg,
      },
    },
  },
  bold: {
    fontWeight: 'bold',
  },
}));

const PageHeading = () => (
  <Typography variant="h1" align="center">
    Vzděláváme Česko v(nejen)
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
    Komunita, co ti
    <br /> změní život
  </Typography>
);

const TakYourTasteHeadline = () => (
  <Typography variant="h3" align="right">
    Věnuj svůj čas komunitě <br /> a získej
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
        <b>Podporu aktivit</b> – pomůžeme ti organizovat akce, propojíme tě se správnými lidi a zajistíme něco do
        začátku.
      </Typography>
      <Typography>
        <b>Propagaci</b> – dostaneš prostor se ukázat na webu, na sociálních sítích nebo v médiích.
      </Typography>
      <Typography>
        <b>Inspiraci</b> – získej nápady i zpětnou vazbu od ostatních z komunity a stoupej ke hvězdám.
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
        text="Jsme komunita nadšenců, kteří nezištně pomáhají vzděláváním a šířením technologického pokroku."
      />
      <ImageMosaic />
      <InfoText
        title={<ConnectedWithGoogleHeadline />}
        text="Máme ke Googlu blízko – víme o novinkách a jsme napojení na světové programy pro Google komunity. Některé globální iniciativy jsme dokonce nastartovali tady v Čechách. To nás ale nijak nebrzdí ve vlastních nápadech a projektech."
      />
      <Box className={classes.leftTextRightImageBox}>
        <InfoText
          align="start"
          title={<YouNeverKnowHeadline />}
          textAlign="left"
          text="Každý rok v GUGu vznikají nová přátelství, projekty a dokonce firmy. V GUGu máme Google Certified Trainers i Google Experty. S nadšením podporujeme nováčky, ať už do světa (nejen) technologií teprve pronikají, nebo už chtějí svoje zkušenosti předávat. Chceš se naučit organizovat akce, přednášet nebo se chystáš na certifikaci? Přidej se k některé skupině nebo si založ vlastní a vzdělávej Česko i sebe. Je jedno, kterou cestou se vydáš, vždycky ti najdeme mentora, aby tvé první kroky s GUGem byly hračka."
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
          title="Chceš mezi nás?"
          textAlign="left"
          text="Chceš se přidat? Svoji jízdu začni tím, že napíšeš na info@gug.cz a pak už pojedeme společně.">
          <Button color="primary" variant="contained" className={classes.buttonMargin}>
            Jdu do toho s vámi!
          </Button>
        </InfoText>
        <div className={classes.customImageBox1}>
          <img src="/images/about/zuzkaPeskova.png" />
          <img src="/images/about/petoMalina.png" />
        </div>
      </Box>
      <Box className={classes.sectionDark}>
        <InfoText title="Čísla místo slibů:" />
        <ScorecardsBox className={classes.sectionMargin} stats={data.stats} />
        <Box className={classes.leftTextRightImageBox}>
          <InfoText
            align="start"
            title={<MeaningFullSponsoringHeadline />}
            textAlign="left"
            text="GUG sdružuje nadšence do technologií, programátorky, seniorní lídry a specialistky nebo učitele. Máme certifikace jako je Google Developer Expert nebo Google Certified Trainer a nebojíme se je použít. Máme zkušenosti a aktivně pracujeme s diverzitou. Umíme pořádat meetupy i mezinárodní konference. Hledáme smyslupná partnerství nejen s technologickými společnostmi. Pomozte nám vzdělávat Česko, najděte nové kolegy a buďte vidět.">
            <Button color="primary" variant="contained" className={classes.buttonMargin}>
              Chci vědět víc.
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
