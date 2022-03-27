import { Button, makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import NextLink from '../../common/NextLink/NextLink';
import InfoText from '../../common/InfoText/InfoText';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    margin: spacing(5, 0),
    display: 'flex',
    flexDirection: 'row',
    '& > *': {
      flex: 1,
    },
    [breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  content: {
    margin: spacing(15, 0, 0),
    [breakpoints.down('sm')]: {
      margin: spacing(2, 0),
    },
  },
  actions: {
    [breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    [breakpoints.up('md')]: {
      '&>*': {
        margin: spacing(0, 2, 0, 0),
      },
    },
  },
  imageBox: {
    textAlign: 'center',
    '& > img': {
      maxWidth: '100%',
    },
    [breakpoints.up('md')]: {
      position: 'relative',
      textAlign: 'right',
      right: spacing(-4),
    },
  },
}));

const HPHeadline = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <InfoText
          title="Vzděláváme Česko v&nbsp;technologiích"
          titleVariant="h1"
          titleAlign="left"
          text="Jsme komunita lidí a hoříme pro stejnou věc: sdílet a předávat dovednosti v nových technologiích. Pořádáme
          akce a sdílíme, co umíme my a naši přednášející."
          textAlign="left"
          align="start"
        />
        <Box className={classes.actions}>
          {false && (
            <Button color="primary" variant="contained" component={NextLink} href="/events">
              Prozkoumej akce
            </Button>
          )}
          <Button
            variant="contained"
            component={NextLink}
            color="primary"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfjS6fGLijDDw-kk5VAtk67u9AGsmjqyhOZvAwz6T5suj-jdQ/viewform">
            Přidej se k nám
          </Button>
        </Box>
      </Box>
      <Box className={classes.imageBox}>
        <img src="/images/hp/headline.png" alt="Gug intro image" />
      </Box>
    </Box>
  );
};

HPHeadline.propTypes = {};

export default HPHeadline;
