import {dimensions} from '../constants';

type Props = {
  widthPercentage?: number;
  heightPercentage?: number;
};

export function getDynamicSize({
  heightPercentage = 0,
  widthPercentage = 0,
}: Props) {
  const dynamicWidth = (dimensions.width / 100) * widthPercentage;
  const dynamicHeight = (dimensions.height / 100) * heightPercentage;

  return {
    dynamicWidth,
    dynamicHeight,
  };
}
