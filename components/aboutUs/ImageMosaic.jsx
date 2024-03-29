import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import GroupsIcon from '@material-ui/icons/GroupRounded';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { logoVariant } from '../common/ChapterLogo/ChapterLogo';
import ChatBubble from '../UI/ChatBubble/ChatBubble';
import Circle from '../UI/Circle/Circle';

const useStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    gridGap: '5%',
    aspectRatio: 1,
    margin: '0 auto',
    '& > *:nth-child(1)': {
      gridColumnStart: 1,
      gridColumnEnd: 3,
      gridRowStart: 1,
      gridRowEnd: 3,
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
  floatingBubble: {
    position: 'relative',
    '&>*': {
      position: 'absolute',
    },
  },
  blueBubble: {
    bottom: 0,
    left: 0,
  },
  redBubble: {
    right: 0,
    bottom: -20,
  },
}));

const ImageMosaic = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src="/images/about/mosaic01.jpg" alt="random alt text" className={classes.bubbleShape} />
      <img src="/images/about/mosaic02.jpg" alt="random alt text" className={classes.penguinShape} />
      <Box className={classes.floatingBubble}>
        <ChatBubble
          className={classes.blueBubble}
          size={'L'}
          variant={logoVariant.GDG}
          direction="bottomLeft"
          icon={GroupsIcon}
        />
      </Box>
      <Circle size={'S'} variant={logoVariant.GBG} position="bottomLeft" />
      <Circle size={'S'} variant={logoVariant.GEG} position="topRight" />
      <Box className={classes.floatingBubble}>
        <ChatBubble
          className={classes.redBubble}
          size={'L'}
          variant={logoVariant.GXG}
          direction="bottomRight"
          icon={MoreHorizIcon}
        />
      </Box>
    </Box>
  );
};

ImageMosaic.propTypes = {};

export default ImageMosaic;
