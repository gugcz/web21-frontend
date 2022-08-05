import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes, { number } from 'prop-types';
import classNames from 'classnames/bind';
import { logoVariant } from '../../common/ChapterLogo/ChapterLogo';

export const sizeMap = {
  XXS: 8,
  XS: 32,
  S: 64,
  M: 155,
  L: 223,
  XXL: 999,
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
  const [sizeValue, setSizeValue] = useState(sizeMap.XXL);
  useEffect(() => {
    setSizeValue(sizeMap[size]);
  }, [size]);

  return (
    <Box
      className={classNames(className, classes.root, classes[variant], classes[position])}
      style={{ width: sizeValue, height: sizeValue }}>
      {Icon && <Icon className={classNames(classes.icon, classes['icon-' + size])} />}
    </Box>
  );
};

Circle.propTypes = {
  className: PropTypes.any,
  icon: PropTypes.elementType,
  position: PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
  size: PropTypes.oneOf(['XXS', 'XS', 'S', 'M', 'L', 'XXL', number]),
  variant: PropTypes.oneOf(Object.values(logoVariant)),
};

export default Circle;
