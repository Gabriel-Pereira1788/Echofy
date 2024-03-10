interface Props {
  partialValue: number;
  totalValue: number;
  duration: number;
}

export function makeSwipedPosition({
  partialValue,
  duration,
  totalValue,
}: Props) {
  const percentageSwipedValue = (partialValue / totalValue) * 100;
  const swipedPosition = (percentageSwipedValue * duration) / 100;

  return swipedPosition;
}
