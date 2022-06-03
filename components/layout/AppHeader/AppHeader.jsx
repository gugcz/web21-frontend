import { AppBar, Box, Hidden, IconButton, makeStyles, Menu, MenuItem, Toolbar } from '@material-ui/core';
import React, { useCallback } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../common/Logo/Logo';
import { JoinUsHeaderButton } from '../JoinUsHeaderButton/JoinUsHeaderButton';
import NextLink from '../../common/NextLink/NextLink';

const useStyles = makeStyles(({ spacing }) => ({
  menu: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: spacing(6),
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = useCallback(
    (event) => {
      setAnchorEl(event.currentTarget);
    },
    [setAnchorEl]
  );

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Logo />
        <Hidden smDown>
          <Box m={1} className={classes.menu}>
            <NextLink href="/about">O nás</NextLink>
            <NextLink href="/events">Události</NextLink>
          </Box>
          <JoinUsHeaderButton />
        </Hidden>
        <Hidden mdUp>
          <IconButton
            edge="start"
            color="primary"
            aria-label="menu"
            className={classes.hamburgerMenu}
            onClick={openMenu}>
            <MenuIcon fontSize="large" />
          </IconButton>
          <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem>
              <NextLink href="/" onClick={handleMenuClose}>
                Úvod
              </NextLink>
            </MenuItem>
            <MenuItem>
              <NextLink href="/about" onClick={handleMenuClose}>
                O nás
              </NextLink>
            </MenuItem>
            <MenuItem>
              <NextLink
                href="https://docs.google.com/forms/d/e/1FAIpQLSfjS6fGLijDDw-kk5VAtk67u9AGsmjqyhOZvAwz6T5suj-jdQ/viewform"
                onClick={handleMenuClose}>
                Přidej se -&gt;
              </NextLink>
            </MenuItem>
          </Menu>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
