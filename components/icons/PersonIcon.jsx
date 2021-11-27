import IconSrc from '../../public/icons/personIcon.svg';
import IconWrapper, { IconPropType } from './IconWrapper';

const PersonIcon = ({ size, ...props }) => (
  <IconWrapper {...props} size={size} component={IconSrc} viewBox="0 0 61 57" />
);
PersonIcon.propTypes = IconPropType;
export default PersonIcon;
