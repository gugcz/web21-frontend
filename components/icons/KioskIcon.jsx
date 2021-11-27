import IconSrc from '../../public/icons/kioskIcon.svg';
import IconWrapper, { IconPropType } from './IconWrapper';

const KioskIcon = ({ size, ...props }) => (
  <IconWrapper {...props} size={size} component={IconSrc} viewBox="0 0 51 52" />
);
KioskIcon.propTypes = IconPropType;
export default KioskIcon;
