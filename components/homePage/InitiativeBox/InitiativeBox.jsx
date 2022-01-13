import { Chip, makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { shuffleArray } from '../../../src/utils';

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    position: 'relative',
    padding: '50px 70px',
  },
  pacman: {
    position: 'absolute',
    top: -20,
    left: -10,
    width: 0,
    height: 0,
    borderRight: '60px solid transparent',
    borderTop: '60px solid red',
    borderLeft: '60px solid red',
    borderBottom: '60px solid red',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    transform: 'rotate(45deg)',
    '&.red': {
      borderTop: '60px solid ' + palette.chapters.gxg,
      borderLeft: '60px solid ' + palette.chapters.gxg,
      borderBottom: '60px solid' + palette.chapters.gxg,
    },
    '&.green': {
      borderTop: '60px solid ' + palette.chapters.gbg,
      borderLeft: '60px solid ' + palette.chapters.gbg,
      borderBottom: '60px solid' + palette.chapters.gbg,
    },
    '&.yellow': {
      borderTop: '60px solid ' + palette.chapters.geg,
      borderLeft: '60px solid ' + palette.chapters.geg,
      borderBottom: '60px solid' + palette.chapters.geg,
    },
    '&.blue': {
      borderTop: '60px solid ' + palette.chapters.gdg,
      borderLeft: '60px solid ' + palette.chapters.gdg,
      borderBottom: '60px solid' + palette.chapters.gdg,
    },
  },
  text: {
    maxWidth: 370,
    margin: spacing(3, 0),
    color: palette.text.secondary, //'#9A9A9A',
  },
  chip: {
    marginRight: spacing(0.5),
  },
}));

const lettersMap = {
  blue: 'GDG',
  yellow: 'GEG',
  green: 'GBG',
  red: 'GXG',
};

const InitiativeBox = ({ title, text, variant, groups = [] }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <div className={classNames(classes.pacman, variant)} />
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body1" className={classes.text}>
        {text}
      </Typography>
      <Typography variant={'subtitle2'}>Kde najdete {lettersMap[variant]}</Typography>
      {shuffleArray(groups).map((groupName) => (
        <Chip key={groupName} size="small" label={groupName} className={classes.chip} />
      ))}
    </Box>
  );
};

InitiativeBox.propTypes = {
  variant: PropTypes.oneOf(['blue', 'yellow', 'green', 'red']),
  title: PropTypes.string,
  text: PropTypes.string,
  groups: PropTypes.array,
};

export default InitiativeBox;
