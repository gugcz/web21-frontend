import { makeStyles } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { logoVariant } from '../ChapterLogo/ChapterLogo';

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: spacing(1),
  },
  [logoVariant.GDG]: {
    backgroundColor: palette.chapters.gdg,
  },
  [logoVariant.GEG]: {
    backgroundColor: palette.chapters.geg,
  },
  [logoVariant.GBG]: {
    backgroundColor: palette.chapters.gbg,
  },
  [logoVariant.GXG]: {
    backgroundColor: palette.chapters.gxg,
  },
}));

const Dot = ({ variant = logoVariant.GDG }) => {
  const classes = useStyles();
  return <span className={classNames(classes.root, classes[variant])} />;
};

Dot.propTypes = {
  variant: PropTypes.oneOf(Object.values(logoVariant)),
};

export default Dot;
