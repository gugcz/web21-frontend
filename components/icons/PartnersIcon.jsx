import IconSrc from '../../public/icons/partners.svg';
import IconWrapper, { IconPropType } from './IconWrapper';

const LocationIcon = ({ size, ...props }) => (
  <IconWrapper {...props} size={size} component={IconSrc} viewBox="0 0 68 66" />
);
LocationIcon.propTypes = IconPropType;
export default LocationIcon;
