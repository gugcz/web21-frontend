import IconSrc from '../../public/icons/locationIcon.svg';
import IconWrapper, { IconPropType } from './IconWrapper';

const LocationIcon = ({ size, ...props }) => (
  <IconWrapper {...props} size={size} component={IconSrc} viewBox="0 0 55 69" />
);
LocationIcon.propTypes = IconPropType;
export default LocationIcon;
