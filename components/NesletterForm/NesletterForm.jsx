import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import EmailIcon from '../icons/EmailIcon';
import FacebookIcon from '../icons/FacebookIcon';
import InstagramIcon from '../icons/InstagramIcon';
import InfoText from '../common/InfoText/InfoText';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: spacing(10, 0),
  },
  becauseReasons: {
    display: 'flex',
    '& > *': {
      margin: spacing(0, 1),
      color: 'grey', // todo
    },
  },
  form: {
    margin: spacing(4, 0),
    display: 'flex',
    '& > *': {
      margin: spacing(0, 0.5),
    },
  },
  socky: {
    display: 'flex',
    '& > *': {
      margin: spacing(0, 0.5),
      color: 'grey', // todo
    },
  },
  field: {
    margin: 0,
    padding: 0,
  },
  inputRoot: {
    borderRadius: '50px 0 0 50px',
    '&::before, &::after': {
      borderBottom: 'none !important',
    },
  },
  inputInput: {
    paddingLeft: 16,
    color: '#202020',
  },
  button: {
    margin: 0,
    borderRadius: '0 50px 50px 0',
    paddingRight: 24,
    boxShadow: 'none',
  },
}));

export const NewsletterForm = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <InfoText icon={<EmailIcon size={80} />} title="GUGletter" />
      <div className={classes.becauseReasons}>
        <Typography variant={'body2'}>Budeš první u zdroje a pořád v obraze</Typography>
        <Typography variant={'body2'}>Neunikne ti žádný event</Typography>
        <Typography variant={'body2'}>Max 2 maily měsíčně, nic na sílu</Typography>
      </div>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          className={classes.field}
          InputProps={{ classes: { root: classes.inputRoot, input: classes.inputInput } }}
          InputLabelProps={{ classes: { root: classes.inputInput } }}
          variant={'filled'}
          label={'Zadejte email'}
          margin="dense"
        />
        <Button className={classes.button} variant={'contained'} color={'primary'}>
          Přihlásit se k odběru
        </Button>
      </form>
      <div className={classes.socky}>
        <Typography variant={'body2'}>A taky socky</Typography>
        {/* todo - links */}
        <FacebookIcon />
        <InstagramIcon />
      </div>
    </Box>
  );
};
