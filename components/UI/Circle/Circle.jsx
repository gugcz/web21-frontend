import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes, { number, string } from 'prop-types';
import classNames from 'classnames/bind';
import { logoVariant } from '../../common/ChapterLogo/ChapterLogo';

export const sizeMap = {
  XXS: ['8vw', 8, '7vw', '90px'], //todo
  XS: ['10vw', 32, '7vw', '90px'], //todo
  S: ['10vw', 64, '3vw', '30px'],
  M: ['10vw', 15, '7vw', '90px'], //todo
  L: ['17vw', 220, '7vw', '90px'],
  XXL: ['10vw', 999, '7vw', '90px'], //todo
};

const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: 64,
    height: 64,
    borderRadius: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 60,
    color: 'white',
  },
  'icon-S': {
    fontSize: 30,
  },
  'icon-M': {
    fontSize: 80,
  },
  topLeft: { justifySelf: 'start', alignSelf: 'start' },
  topRight: { justifySelf: 'end', alignSelf: 'start' },
  bottomLeft: { justifySelf: 'start', alignSelf: 'end' },
  bottomRight: { justifySelf: 'end', alignSelf: 'end' },
  //todo - center center
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

const Circle = ({ size, variant = logoVariant.GXG, className, position = 'topLeft', icon: Icon }) => {
  const classes = useStyles();
  const [[relative, maximum, iconSize, maxIconSize], setSizeValue] = useState(sizeMap.XXL);
  useEffect(() => {
    setSizeValue(sizeMap[size]);
  }, [size]);

  return (
    <Box
      className={classNames(className, classes.root, classes[variant], classes[position])}
      style={{ width: relative, height: relative, maxWidth: maximum, maxHeight: maximum }}>
      {Icon && <Icon style={{ fontSize: `min(${iconSize},${maxIconSize})` }} className={classNames(classes.icon)} />}
    </Box>
  );
};

Circle.propTypes = {
  className: PropTypes.any,
  icon: PropTypes.elementType,
  position: PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
  size: PropTypes.oneOf(['XXS', 'XS', 'S', 'M', 'L', 'XXL', number, string]),
  variant: PropTypes.oneOf(Object.values(logoVariant)),
};

export default Circle;
