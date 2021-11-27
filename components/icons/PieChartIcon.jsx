import IconSrc from '../../public/icons/piechartIcon.svg';
import IconWrapper, { IconPropType } from './IconWrapper';

const PieChartIcon = ({ size, ...props }) => (
  <IconWrapper {...props} size={size} component={IconSrc} viewBox="0 0 101 101" />
);
PieChartIcon.propTypes = IconPropType;
export default PieChartIcon;
