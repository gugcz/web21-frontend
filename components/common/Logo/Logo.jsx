import { makeStyles } from '@material-ui/core';
import Link from 'next/link';
import PropTypes from 'prop-types';

export const logoVariant = {
  COLOR: 'COLOR',
  BW: 'BW',
};

const useStyles = makeStyles(() => ({
  root: {},
}));

const Logo = ({ variant = logoVariant.COLOR }) => {
  const classes = useStyles();

  return (
    <Link href="/">
      <a>
        {variant === logoVariant.COLOR && <img src="/images/gugLogo.png" alt="GUG Logo" className={classes.root} />}
        {variant === logoVariant.BW && <img src="/images/gugLogo_BW.svg" alt="GUG Logo" className={classes.root} />}
      </a>
    </Link>
  );
};

Logo.propTypes = {
  variant: PropTypes.oneOf(Object.values(logoVariant)),
};

export default Logo;
