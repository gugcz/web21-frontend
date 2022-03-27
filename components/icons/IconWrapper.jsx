import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const IconPropType = {
  size: PropTypes.number,
};

const IconWrapper = ({ size = 60, component, viewBox, ...props }) => (
  <SvgIcon {...props} style={{ fontSize: size }} component={component} viewBox={viewBox} />
);

IconWrapper.propTypes = {
  size: PropTypes.number,
  component: PropTypes.elementType,
  viewBox: PropTypes.string,
};

export default IconWrapper;
