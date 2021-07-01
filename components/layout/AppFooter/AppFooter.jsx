import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Box from '@material-ui/core/Box';
import Logo, { logoVariant } from '../../common/Logo/Logo';

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    backgroundColor: palette.primary.main,
    padding: spacing(9, 0),
    color: palette.primary.contrastText,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    margin: spacing(5, 4, 10),
    '&> *': {
      flex: 1,
      '&> *': {
        padding: spacing(1, 0),
      },
    },
  },
  social: {
    flex: 5,
  },
}));

export const AppFooter = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth={'lg'}>
        <Logo variant={logoVariant.BW} />
        <Box className={classes.row}>
          <Box>
            <Typography variant={'subtitle1'}>Eventy</Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
          </Box>
          <Box>
            <Typography variant={'subtitle1'}>Iniciativy</Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
          </Box>
          <Box>
            <Typography variant={'subtitle1'}>GUGeři</Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
          </Box>
          <Box>
            <Typography variant={'subtitle1'}>O nás</Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
            <Typography component={'p'} variant={'caption'}>
              menu
            </Typography>
          </Box>
          <Box className={classes.social}>
            <Typography align="right" variant={'subtitle1'}>
              Novinky a akce na socials a v newsletteru
            </Typography>
            <Typography align="right">TBD</Typography>
          </Box>
        </Box>
        <Typography align="right" variant={'body2'}>
          Na tomto webu straší
        </Typography>
      </Container>
    </Box>
  );
};
