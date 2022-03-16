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
    <NextLink
      href="https://docs.google.com/forms/d/e/1FAIpQLSfjS6fGLijDDw-kk5VAtk67u9AGsmjqyhOZvAwz6T5suj-jdQ/viewform"
      className={classes.root}
      variant="body1"
      target="_blank"
      rel="noopener">
      Přidej se -&gt;
    </NextLink>
  );
};
