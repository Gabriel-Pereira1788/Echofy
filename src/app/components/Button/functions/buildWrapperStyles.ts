import {BoxProps} from '../../Box/Box';
import {ButtonProps} from '../Button';

export const buildWrapperStyle = (
  type: ButtonProps['type'],
  disabled?: boolean,
): BoxProps => {
  const commonStyle: BoxProps = {
    padding: 'sp16',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 'rd8',
    gap: 'sp10',
    opacity: disabled ? 0.3 : 1,
  };
  if (type === 'selected') {
    return {
      ...commonStyle,
      width: 'auto',
      padding: 'sp10',
      backgroundColor: 'primary50',
      borderRadius: 'rd15',
    };
  }
  if (type === 'category') {
    return {
      ...commonStyle,
      borderWidth: 1,
      width: 'auto',
      padding: 'sp10',
      borderColor: 'border',
      borderRadius: 'rd15',
    };
  }
  if (type === 'outline') {
    return {
      ...commonStyle,
      borderWidth: 1,
      borderColor: 'border',
    };
  }

  return {
    ...commonStyle,
    backgroundColor: 'primary50',
  };
};
