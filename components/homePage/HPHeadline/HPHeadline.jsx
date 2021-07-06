import { Button, makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';

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
  text: {
    margin: spacing(4, 0),
    maxWidth: '50%',
    [breakpoints.down('sm')]: {
      maxWidth: '70%',
    },
  },
  actions: {
    [breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    [breakpoints.up('md')]: {
      '&>*': {
        margin: spacing(0, 1),
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
        <Typography variant="h1">Vzděláváme česko v&nbsp;technologiich</Typography>
        <Typography component="div" variant="caption" className={classes.text} color="textSecondary">
          Jsme komunita GUGerů a hoříme pro stejnou věc: sdílet a předávat dovednosti v nových technologiích. Pořádáme
          akce a sdílíme, co umíme my a naši přednášející.
        </Typography>
        <Box className={classes.actions}>
          <Button color="primary" variant="contained">
            Prozkoumej eventy
          </Button>
          <Button variant="contained">Přidej se k nám</Button>
        </Box>
      </Box>
      <Box className={classes.imageBox}>
        <img src="/images/hp/headline.png" />
      </Box>
    </Box>
  );
};

HPHeadline.propTypes = {};

export default HPHeadline;
