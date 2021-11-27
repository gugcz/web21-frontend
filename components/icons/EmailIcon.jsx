import IconSrc from '../../public/icons/emailIcon.svg';
import IconWrapper, { IconPropType } from './IconWrapper';

const EmailIcon = ({ size, ...props }) => (
  <IconWrapper {...props} size={size} component={IconSrc} viewBox="0 0 100 77" />
);
EmailIcon.propTypes = IconPropType;
export default EmailIcon;
