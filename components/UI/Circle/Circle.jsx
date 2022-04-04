import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes, { number } from 'prop-types';
import classNames from 'classnames/bind';
import { logoVariant } from '../../common/ChapterLogo/ChapterLogo';

const sizeMap = {
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
    backgroundColor: 'Red',
    borderRadius: '100%',
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

const Circle = ({ size, variant = logoVariant.GXG }) => {
  const classes = useStyles();
  const [sizeValue, setSizeValue] = useState(sizeMap.XXL);
  useEffect(() => {
    setSizeValue(sizeMap[size]);
  }, [size]);

  return <Box className={classNames(classes.root, classes[variant])} style={{ width: sizeValue, height: sizeValue }} />;
};

Circle.propTypes = {
  size: PropTypes.oneOf(['XXS', 'XS', 'S', 'M', 'L', 'XXL', number]),
  variant: PropTypes.oneOf(Object.values(logoVariant)),
};

export default Circle;
