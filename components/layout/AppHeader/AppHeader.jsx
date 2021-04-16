import { AppBar, Box, Hidden, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../common/Logo/Logo';
import { JoinUsHeaderButton } from '../JoinUsHeader/JoinUsHeaderButton';

const useStyles = makeStyles(({ spacing }) => ({
  menu: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    '& >*': {
      padding: spacing(0, 1),
    },
  },
  hamburgerMenu: {
    marginRight: 0,
    marginLeft: 'auto',
  },
}));

export const AppHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Logo />
        <Hidden smDown>
          <Box m={1} className={classes.menu}>
            <Typography>Menu 1</Typography>
            <Typography>Menu 2</Typography>
            <Typography>Menu 3</Typography>
            <Typography>Menu 4</Typography>
          </Box>
          <JoinUsHeaderButton />
        </Hidden>
        <Hidden mdUp>
          <IconButton edge="start" color="primary" aria-label="menu" className={classes.hamburgerMenu}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
