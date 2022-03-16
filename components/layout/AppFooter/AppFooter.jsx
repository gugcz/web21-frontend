import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Box from '@material-ui/core/Box';
import Logo, { logoVariant } from '../../common/Logo/Logo';
import NextLink from '../../common/NextLink/NextLink';

const useStyles = makeStyles(({ palette, spacing, breakpoints, gugWeb }) => ({
  root: {
    backgroundColor: palette.primary.main,
    padding: spacing(9, 4, 5),
    marginTop: spacing(8),
    color: palette.primary.contrastText,
    background: ' url(/artefacts/footer_right.svg), url(/artefacts/footer_left.svg)',
    backgroundRepeat: 'no-repeat,  no-repeat',
    backgroundPosition: 'bottom right,  bottom left',
    [breakpoints.down('sm')]: {
      padding: spacing(6, 4, 5),
      backgroundColor: palette.primary.main,
      background: 'url(/artefacts/footer_mobile.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top left',
    },
  },
  contentWidth: {
    maxWidth: gugWeb.maxWidth,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    margin: spacing(5, 4, 10),
    '&> *': {
      flex: 1,
      '&> *': {
        padding: spacing(1, 0),
      },
    },
    [breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      margin: spacing(3, 0, 10),
      '&> *': {
        flex: '1 1 50%',
        '&> *': {
          padding: spacing(1, 0),
        },
      },
    },
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  social: {
    display: 'flex',
    flexDirection: 'column',
    flex: 5,
    alignItems: 'flex-end',
  },
  socialIcons: {
    '& > *': {
      margin: spacing(0, 1),
    },
  },
  partner: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
}));

export const AppFooter = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth={'lg'} disableGutters className={classes.contentWidth}>
        <Logo variant={logoVariant.BW} />
        <Box className={classes.content}>
          {false && (
            <Box>
              <Typography variant={'subtitle1'}>Eventy</Typography>
            </Box>
          )}
          {false && (
            <Box>
              <Typography variant={'subtitle1'}>Iniciativy</Typography>
            </Box>
          )}
          {false && (
            <Box>
              <Typography variant={'subtitle1'}>GUGeři</Typography>
            </Box>
          )}
          <Box>
            <NextLink href="/about">O nás</NextLink>
          </Box>
          <Box className={classes.social}>
            <Typography display="inline" variant={'subtitle1'}>
              Novinky a akce na socials a v newsletteru
            </Typography>
            <Box className={classes.socialIcons}>
              <NextLink href="https://www.facebook.com/GUG.cz">
                <img src="/images/facebook.svg" alt="Link to GUG facebook" />
              </NextLink>
              <NextLink href="www.linkedin.com/company/gugcz">
                <img src="/images/linkedIn.svg" alt="Link to GUG LinkedIn" />
              </NextLink>
              <NextLink href="https://www.youtube.com/user/gugczgroup">
                <img src="/images/youtube.svg" alt="Link to GUG Youtube" />
              </NextLink>
              <NextLink href="https://www.instagram.com/gug.cz/">
                <img src="/images/twitter.svg" alt="Link to GUG twitter" />
              </NextLink>
            </Box>
          </Box>
        </Box>
        <Typography className={classes.partner} variant={'body2'}>
          Na tomto webu straší
        </Typography>
      </Container>
    </Box>
  );
};
