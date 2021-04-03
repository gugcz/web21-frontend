import { Box, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Box m={4}>
      <p>Tohle je obyčejné html</p>
      <Link href="/about" color="secondary" className={classes.root}>
        Go to the about page
      </Link>
    </Box>
  );
}
