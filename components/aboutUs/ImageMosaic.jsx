import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Circle from '../UI/Circle/Circle';
import { logoVariant } from '../common/ChapterLogo/ChapterLogo';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [breakpoints.down('sm')]: {
      margin: spacing(0, 0, 2),
    },
  },
  img: {
    maxWidth: '100%',
  },
}));

// todo - make mosaic more configurable
// allow to change pictures
// create simple components for every photo

const ImageMosaic = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Circle size={'S'} variant={logoVariant.GXG} />
      <img src="/images/hp/mosaic.png" alt="Photo mosaic" className={classes.img} />
    </Box>
  );
};

ImageMosaic.propTypes = {};

export default ImageMosaic;
