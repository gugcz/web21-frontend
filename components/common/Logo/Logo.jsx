import { makeStyles } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  root: {},
}));

export default function Logo() {
  const classes = useStyles();

  return (
    <Link href="/">
      <a>
        <img src="/images/gugLogo.png" alt="GUG Logo" className={classes.root} />
      </a>
    </Link>
  );
}
