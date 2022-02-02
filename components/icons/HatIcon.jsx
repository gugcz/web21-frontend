import IconSrc from '../../public/icons/hatIcon.svg';
import IconWrapper, { IconPropType } from './IconWrapper';

const HatIcon = ({ size, ...props }) => <IconWrapper {...props} size={size} component={IconSrc} viewBox="0 0 101 55" />;

HatIcon.propTypes = IconPropType;
export default HatIcon;
