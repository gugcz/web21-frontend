import IconSrc from '../../public/icons/facebookIcon.svg';
import IconWrapper, { IconPropType } from './IconWrapper';

const FacebookIcon = ({ size = 20, ...props }) => (
  <IconWrapper {...props} size={size} component={IconSrc} viewBox="0 0 25 25" />
);
FacebookIcon.propTypes = IconPropType;
export default FacebookIcon;
