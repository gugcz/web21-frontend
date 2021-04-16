import { makeStyles } from '@material-ui/core';
import NextLink from '../../common/NextLink/NextLink';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    position: 'relative',
    width: 150,
    height: 64, //todo get current header height
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: palette.primary.contrastText,

    //blue circle
    '&::after': {
      content: '""',
      width: 150,
      height: 150,
      backgroundColor: palette.primary.main,
      display: 'block',
      position: 'absolute',
      borderRadius: '0 0 50% 50%',
      top: -75,
      zIndex: -1,
    },
  },
}));

export const JoinUsHeaderButton = () => {
  const classes = useStyles();

  return (
    <NextLink href="/about" variant="body1" className={classes.root}>
      Přidej se -&gt;
    </NextLink>
  );
};
