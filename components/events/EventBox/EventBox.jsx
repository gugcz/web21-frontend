import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import PropTypes from 'prop-types';
import { CalendarToday as CalendarIcon, Place as PlaceIcon, Schedule as TimeIcon } from '@material-ui/icons';
import dayjs from 'dayjs';
import classNames from 'classnames/bind';
import ChapterLogo from '../../common/ChapterLogo/ChapterLogo';
import DetailButton from '../../common/DetailButton/DetailButton';

export const EventBoxPropTypes = {
  event: PropTypes.shape({
    slug: PropTypes.string,
    chapterId: PropTypes.string,
    chapterName: PropTypes.string,
    chapterCode: PropTypes.string,
    eventName: PropTypes.string,
    date: PropTypes.string,
    address: PropTypes.string,
    intro: PropTypes.string,
    location: PropTypes.string,
    image: PropTypes.string,
    regLink: PropTypes.string,
    mdText: PropTypes.string,
    eventId: PropTypes.number,
    timeStart: PropTypes.string,
    timeEnd: PropTypes.string,
  }),
};

const useStyles = (chapterCode) =>
  makeStyles(({ spacing, palette }) => ({
    root: {
      border: '1.5px solid',
      borderColor: palette.chapters[chapterCode],
      borderRadius: 6,
      padding: spacing(2),
    },
    image: {
      width: '100%',
    },
    eventName: {
      fontWeight: 'bold',
      fontSize: 21,
      margin: spacing(2, 0),
    },
    intro: {
      margin: spacing(3, 0),
      color: '#9A9A9A',
    },
    timeAndDateWrapper: {
      margin: spacing(2, 0),
      display: 'flex',
      flexDirection: 'row',
      color: '#6A6A6A',
    },
    iconWithText: {
      display: 'flex',
      flexDirection: 'row',
      marginRight: spacing(3),
      '&>p': {
        marginLeft: spacing(1),
        fontWeight: 500,
      },
    },
    locationWrapper: {
      margin: spacing(2, 0),
    },
    redPlace: {
      color: 'red',
    },
    rvsp: {
      // todo - align button with end of box in grid
    },
  }));

const EventBox = ({ event }) => {
  const classes = useStyles(event.chapterCode.toLowerCase())();

  if (!event) {
    return null;
  }

  return (
    <Box className={classes.root} boxShadow={2}>
      <ChapterLogo variant={event.chapterCode} />
      <img src={event.image} className={classes.image} />
      <Typography variant="h4" className={classes.eventName}>
        {event.eventName}
      </Typography>
      <Typography variant="body1" className={classes.intro}>
        {event.intro}
      </Typography>
      <box className={classes.timeAndDateWrapper}>
        <box className={classes.iconWithText}>
          <CalendarIcon />
          <Typography>{dayjs(event.date).format('DD.MM.YY')}</Typography>
        </box>
        <box className={classes.iconWithText}>
          <TimeIcon />
          <Typography>
            {event.timeStart} - {event.timeEnd}
          </Typography>
        </box>
      </box>
      <box className={classNames(classes.locationWrapper, classes.iconWithText)}>
        <PlaceIcon className={classes.redPlace} />
        <Typography>{event.address}</Typography>
      </box>
      <DetailButton
        className={classes.rvsp}
        href={`/event/${encodeURIComponent(event.slug)}`}
        text="Chytit místo na akci"
      />
    </Box>
  );
};

EventBox.propTypes = EventBoxPropTypes;

export default EventBox;
