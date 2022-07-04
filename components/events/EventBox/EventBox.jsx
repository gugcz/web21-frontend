import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import { CalendarToday as CalendarIcon, Place as PlaceIcon, Schedule as TimeIcon } from '@material-ui/icons';
import dayjs from 'dayjs';
import classNames from 'classnames/bind';
import DetailButton from '../../common/DetailButton/DetailButton';
import { TalkBaseEventPropType } from '../../../model/events.model';

const useStyles = (chapterCode) =>
  makeStyles(({ spacing, palette }) => ({
    root: {
      border: '1.5px solid',
      borderColor: palette.chapters[chapterCode],
      borderRadius: 6,
      padding: spacing(2),
      display: 'flex',
      flexDirection: 'column',
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
      marginTop: 'auto',
    },
  }));

const EventBox = ({ event, past }) => {
  const visual = ['gdg', 'gbg', 'gxg', 'geg'];
  const classes = useStyles(visual[Math.floor(Math.random() * visual.length)])();

  if (!event) {
    return null;
  }

  return (
    <Box className={classes.root} boxShadow={2}>
      {event.coverPhoto && <img src={event.coverPhoto?.url} className={classes.image} />}
      <Typography variant="h4" className={classes.eventName}>
        {event.title}
      </Typography>
      <Box className={classes.timeAndDateWrapper}>
        <Box className={classes.iconWithText}>
          <CalendarIcon />
          <Typography>{dayjs(event.startTime).format('DD.MM.YY')}</Typography>
        </Box>
        <Box className={classes.iconWithText}>
          <TimeIcon />
          <Typography>
            {dayjs(event.startTime).format('HH:mm')}- {dayjs(event.endTime).format('HH:mm')}
          </Typography>
        </Box>
      </Box>
      <Box className={classNames(classes.locationWrapper, classes.iconWithText)}>
        <PlaceIcon className={classes.redPlace} />
        <Typography>{event?.address?.formattedAddress}</Typography>
      </Box>
      <DetailButton
        className={classes.rvsp}
        href={`https://talkbase.io${event.url}`}
        text={past ? 'Zobrazit akci' : 'Chytit místo na akci'}
      />
    </Box>
  );
};

EventBox.propTypes = {
  event: TalkBaseEventPropType,
};

export default EventBox;
