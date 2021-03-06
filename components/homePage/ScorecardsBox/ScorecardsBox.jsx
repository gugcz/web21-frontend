import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ScoreCard from '../../common/ScoreCard/ScoreCard';
import { HatIcon, KioskIcon, LocationIcon, PersonIcon } from '../../icons/icons';
import InfoText from '../../common/InfoText/InfoText';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {},
  scoreCards: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '& > *': {
      minWidth: 200,
      margin: spacing(0, 2),
    },
    [breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      '& > *': {
        margin: spacing(1.5, 0),
        flex: '1 1 50%',
      },
    },
  },
}));

const ScorecardsBox = ({ stats, className, title = 'Čísla místo slibů:' }) => {
  const classes = useStyles();

  return (
    <Box className={classNames(classes.root, className)}>
      {title && <InfoText title={title} />}
      <Box className={classes.scoreCards}>
        <ScoreCard icon={HatIcon} label="Lidí jsme vzdělali" value={stats.visitors} iconSize={96} />
        <ScoreCard icon={LocationIcon} label="Uspořádaných akcí" value={stats.events} iconSize={65} />
        <ScoreCard icon={PersonIcon} label="Nových gugerů" value={stats.gugers} />
        <ScoreCard icon={KioskIcon} label="Měst kde působíme" value={stats.cities} />
      </Box>
    </Box>
  );
};

ScorecardsBox.propTypes = {
  stats: PropTypes.exact({
    visitors: PropTypes.number,
    events: PropTypes.number,
    cities: PropTypes.number,
    gugers: PropTypes.number,
  }),
  className: PropTypes.any,
  title: PropTypes.string,
};

export default ScorecardsBox;
