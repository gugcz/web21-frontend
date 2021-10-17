import { Button, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import NextLink from '../NextLink/NextLink';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    backgroundColor: '#E5EEFF',
    height: 54,
    boxShadow: 'none',
  },
}));

const DetailButton = ({ text, href, className }) => {
  const classes = useStyles();

  return (
    <Button className={classNames(classes.root, className)} variant="contained" component={NextLink} href={href}>
      {text}
    </Button>
  );
};

DetailButton.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
};

export default DetailButton;
