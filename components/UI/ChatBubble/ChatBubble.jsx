import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Circle from '../Circle/Circle';

const useStyles = makeStyles(({}) => ({
  root: {},
  topLeft: { borderTopLeftRadius: 0 },
  topRight: { borderTopRightRadius: 0 },
  bottomLeft: { borderBottomLeftRadius: 0 },
  bottomRight: { borderBottomRightRadius: 0 },
}));

const ChatBubble = ({ size, variant, direction = 'topLeft', position = direction, icon }) => {
  const classes = useStyles();

  return (
    <Circle
      icon={icon}
      size={size}
      variant={variant}
      position={position}
      className={classNames(classes.root, classes[direction])}
    />
  );
};

ChatBubble.propTypes = {
  ...Circle.propTypes,
  direction: PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
};

export default ChatBubble;
