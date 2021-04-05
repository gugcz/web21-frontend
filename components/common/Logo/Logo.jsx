import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
}));

export default function Logo() {
  const classes = useStyles();

  return <img src="/gugLogo.png" alt="GUG Logo" className={classes.root} />;
}
