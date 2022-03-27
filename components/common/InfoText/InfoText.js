import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    '&.center': {
      alignItems: 'center',
    },
    '&.start': {
      alignItems: 'flex-start',
    },
    '&.end': {
      alignItems: 'flex-end',
    },
  },
  title: {
    margin: spacing(2, 0),
  },
  text: {
    maxWidth: 500,
    margin: spacing(2, 0),
    [breakpoints.down('sm')]: {
      alignItems: 'center',
    },
  },
}));

const InfoText = ({
  titleProps,
  title,
  titleAlign = 'center',
  titleVariant = 'h2',
  textProps,
  text,
  textAlign = 'center',
  textVariant = 'body2',
  icon,
  align = 'center',
  children,
}) => {
  const classes = useStyles();

  return (
    <Box className={classNames(classes.root, align)}>
      {icon}
      {typeof title === 'string' ? (
        <Typography variant={titleVariant} align={titleAlign} {...titleProps} className={classes.title}>
          {title}
        </Typography>
      ) : (
        title
      )}

      {typeof text === 'string' ? (
        <Typography
          className={classes.text}
          variant={textVariant}
          color="textSecondary"
          align={textAlign}
          {...textProps}>
          {text}
        </Typography>
      ) : (
        text
      )}

      {children}
    </Box>
  );
};

InfoText.propTypes = {
  icon: PropTypes.element,
  align: PropTypes.oneOf(['center', 'start', 'end']),
  children: PropTypes.element,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleVariant: PropTypes.string, // not applied if title is elementType
  titleAlign: PropTypes.string, // not applied if title is elementType
  titleProps: PropTypes.any, // not applied if title is elementType
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  textVariant: PropTypes.string, // not applied if title is elementType
  textAlign: PropTypes.string, // not applied if title is elementType
  textProps: PropTypes.any, // not applied if title is elementType
};

export default InfoText;
