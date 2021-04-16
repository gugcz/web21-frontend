import { makeStyles } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <Link href="/">
      <a>
        <img src="/images/gugLogo.png" alt="GUG Logo" className={classes.root} />
      </a>
    </Link>
  );
};

Logo.propTypes = {};

export default Logo;
