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
    margin: spacing(8, 0, 0),
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
  },
  imageBox: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const EventsHeadline = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Typography variant="h1">GUG eventy</Typography>
        <Typography component="div" variant="caption" className={classes.text} color="textSecondary">
          Jsme komunita, která vzdělává Česko v digitálních technologiích. Nepořádáme jenom přednášky, ale taky setkání,
          výlety a jiné akce, kde sdílíme dovednosti.
        </Typography>
        <Box className={classes.actions}>
          <Button variant="contained">Více o nás</Button>
        </Box>
      </Box>
      <Box className={classes.imageBox}>
        <img src="/images/events/headline.svg" />
      </Box>
    </Box>
  );
};

EventsHeadline.propTypes = {};

export default EventsHeadline;
