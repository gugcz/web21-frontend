import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    position: 'relative',
    width: 150,
    '&::after': {
      content: '""',
      width: 150,
      height: 150,
      backgroundColor: palette.primary.main,
      display: 'block',
      position: 'absolute',
      borderRadius: '0 0 50% 50%',
      top: -100,
      zIndex: -1,
    },
  },
}));

export const JoinUsHeaderButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography align="center">Přidej se -&gt;</Typography>
    </div>
  );
};
