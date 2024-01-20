export type FontSize =
  | 'small10'
  | 'small12'
  | 'small14'
  | 'medium16'
  | 'medium20'
  | 'medium24'
  | 'big32'
  | 'big48';

export type FontWeight = 'light' | 'regular' | 'medium' | 'semiBold' | 'bold';

export const $fontSize: Record<FontSize, number> = {
  big32: 32,
  big48: 48,
  medium16: 16,
  medium20: 20,
  medium24: 24,
  small10: 10,
  small12: 12,
  small14: 14,
};

export const $fontWeight: Record<
  FontWeight,
  '100' | '300' | '500' | '700' | '800'
> = {
  light: '100',
  regular: '300',
  medium: '500',
  semiBold: '700',
  bold: '800',
};
