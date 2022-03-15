import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import mosaicImage from '../../public/images/hp/mosaic.png';
import SharpImage from '../common/NextOptimizedImage/SharpImage';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    [breakpoints.down('sm')]: {
      margin: spacing(0, 0, 2),
    },
  },
}));

// todo - make mosaic more configurable
// allow to change pictures
// create simple components for every photo

const ImageMosaic = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <SharpImage image={mosaicImage} alt="Photos from events mosaic" />
    </Box>
  );
};

ImageMosaic.propTypes = {};

export default ImageMosaic;
