import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Circle from '../UI/Circle/Circle';
import { logoVariant } from '../common/ChapterLogo/ChapterLogo';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(6, 1fr)',
    gridGap: 32,
    aspectRatio: 1,
    maxWidth: '80%',
    margin: '0 auto',
    '& > *:nth-child(1)': {
      gridColumnStart: 1,
      gridColumnEnd: 3,
      gridRowStart: 1,
      gridRowEnd: 4,
    },
    '& > *:nth-child(2)': {
      gridColumnStart: 3,
      gridColumnEnd: 5,
      gridRowStart: 2,
      gridRowEnd: 4,
    },
    '& > *:nth-child(3)': {},
    '& > *:nth-child(4)': {},
  },
  img: {
    maxWidth: '100%',
  },
  bubbleShape: {
    borderRadius: '50%',
    borderTopRightRadius: 0,
    width: '100%',
    objectFit: 'cover',
    aspectRatio: 1,
  },
  penguinShape: {
    borderRadius: '30%',
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: '100%',
    objectFit: 'cover',
    aspectRatio: 4 / 5,
  },
}));

// todo - make mosaic more configurable
// allow to change pictures
// create simple components for every photo

const ImageMosaic = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <img src="/images/dev/eventBox.png" alt="random alt text" className={classes.bubbleShape} />
        <img src="/images/dev/eventBox.png" alt="random alt text" className={classes.penguinShape} />
        <Circle size={'M'} variant={logoVariant.GDG} />
        <Circle size={'S'} variant={logoVariant.GBG} />
        <Circle size={'S'} variant={logoVariant.GEG} />
        <Circle size={'M'} variant={logoVariant.GXG} />
      </Box>
      <img src="/images/hp/mosaic.png" alt="Photo mosaic" className={classes.img} />
    </>
  );
};

ImageMosaic.propTypes = {};

export default ImageMosaic;
