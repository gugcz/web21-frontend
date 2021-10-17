import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

export const logoVariant = {
  GDG: 'GDG',
  GEG: 'GEG',
  GBG: 'GBG',
  GXG: 'GXG',
};

const useStyles = makeStyles(() => ({
  root: {},
}));

const ChapterLogo = ({ variant }) => {
  const classes = useStyles();

  return (
    <>
      {variant === logoVariant.GDG && (
        <img src="/images/chapters/gdg.png" alt="GDG ChapterLogo" className={classes.root} />
      )}
      {variant === logoVariant.GEG && (
        <img src="/images/chapters/geg.png" alt="GEG ChapterLogo" className={classes.root} />
      )}
      {variant === logoVariant.GXG && (
        <img src="/images/chapters/gxg.png" alt="GXG ChapterLogo" className={classes.root} />
      )}
      {variant === logoVariant.GBG && (
        <img src="/images/chapters/gbg.png" alt="GBG ChapterLogo" className={classes.root} />
      )}
    </>
  );
};

ChapterLogo.propTypes = {
  variant: PropTypes.oneOf(Object.values(logoVariant)),
};

export default ChapterLogo;
