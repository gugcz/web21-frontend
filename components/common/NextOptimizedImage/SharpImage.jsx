import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    maxWidth: '100%',
  },
}));

const sizesTMP = '(max-width: 320px) 320px, (max-width: 640px) 640px, 979px';

const SharpImage = ({ image, alt, sizes, ...rest }) => {
  const classes = useStyles();
  console.log('BB', image, sizes);

  return <img srcSet={image.srcSet} src={image.src} alt={alt} sizes={sizesTMP} {...rest} className={classes.root} />;
};

export default SharpImage;
