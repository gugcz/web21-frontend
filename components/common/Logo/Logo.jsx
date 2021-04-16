import { makeStyles } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  root: {},
}));

export default function Logo() {
  const classes = useStyles();

  return (
    <Link href="/about">
      <a>
        <img src="/gugLogo.png" alt="GUG Logo" className={classes.root} />
      </a>
      Test
    </Link>
  );
}
