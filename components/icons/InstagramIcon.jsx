import IconSrc from '../../public/icons/instagramIcon.svg';
import IconWrapper, { IconPropType } from './IconWrapper';

const InstagramIcon = ({ size = 20, ...props }) => (
  <IconWrapper {...props} size={size} component={IconSrc} viewBox="0 0 25 25" />
);
InstagramIcon.propTypes = IconPropType;
export default InstagramIcon;
