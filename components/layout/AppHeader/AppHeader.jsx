import { AppBar, Box, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import Logo from '../../common/Logo/Logo';
import { JoinUsHeaderButton } from '../JoinUsHeader/JoinUsHeaderButton';

const useStyles = makeStyles(({ spacing }) => ({
  menu: {
    display: 'flex',
    flexDirection: 'row',
    '& >*': {
      padding: spacing(0, 1),
    },
  },
}));

export const AppHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Logo />
        <Box m={1} className={classes.menu}>
          <Typography>Menu 1</Typography>
          <Typography>Menu 2</Typography>
          <Typography>Menu 3</Typography>
          <Typography>Menu 4</Typography>
        </Box>
        <JoinUsHeaderButton />
      </Toolbar>
    </AppBar>
  );
};
