import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React, { useCallback, useState } from 'react';
import classNames from 'classnames/bind';
import EmailIcon from '../icons/EmailIcon';
import FacebookIcon from '../icons/FacebookIcon';
import InstagramIcon from '../icons/InstagramIcon';
import InfoText from '../common/InfoText/InfoText';
import NextLink from '../common/NextLink/NextLink';

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
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
    [breakpoints.down('sm')]: {
      flexDirection: 'column',
      margin: 0,
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
    maxHeight: 48,
  },
  statusText: {
    margin: spacing(2),
    color: palette.primary.main,
  },
  error: {
    color: palette.error.main,
  },
}));

const validate = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const NewsletterForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [statusText, setStatusText] = useState();

  const handleEmailValueChange = useCallback(
    (event) => {
      const value = event.target.value;
      setEmail(value);
    },
    [setEmail]
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (validate(email)) {
        setError(false);
        fetch(`https://hook.eu1.make.com/dam53dm2r21iezb9hh7gcl4iotrkmjgy?email=${email}`, {
          method: 'GET',
        })
          .then(() => setStatusText('Váš email byl úspěšně přidán do databáze. Díky!'))
          .catch(() => {
            setError(true);
            setStatusText('Na internetu se něco nepovedlo. Zkuste to znovu a když se to nezlepší napište nám!');
          });
        //send request!
      } else {
        setError('Zadejte email. Díky!');
      }
    },
    [email, setError, setStatusText]
  );

  return (
    <Box className={classes.root}>
      <InfoText icon={<EmailIcon size={80} />} title="GUGletter" />
      <div className={classes.becauseReasons}>
        <Typography variant={'body2'}>Budeš první u zdroje a pořád v obraze</Typography>
        <Typography variant={'body2'}>Neunikne ti žádný event</Typography>
        <Typography variant={'body2'}>Max 2 maily měsíčně, nic na sílu</Typography>
      </div>
      <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          error={error && !statusText}
          helperText={error}
          className={classes.field}
          InputProps={{ classes: { root: classes.inputRoot, input: classes.inputInput } }}
          InputLabelProps={{ classes: { root: classes.inputInput } }}
          onChange={handleEmailValueChange}
          value={email}
          variant={'filled'}
          label={'Zadejte email'}
          margin="dense"
        />
        <Button className={classes.button} variant={'contained'} color={'primary'} type="submit">
          Přihlásit se k odběru
        </Button>
      </form>
      {statusText && (
        <Typography className={classNames(classes.statusText, { [classes.error]: error })}>{statusText}</Typography>
      )}
      <div className={classes.socky}>
        <Typography variant={'body2'}>A taky socky</Typography>
        <NextLink href="https://www.facebook.com/GUG.cz">
          <FacebookIcon />
        </NextLink>
        <NextLink href="https://www.instagram.com/gug.cz/">
          <InstagramIcon />
        </NextLink>
      </div>
    </Box>
  );
};
