export type ThemePreference = 'light' | 'dark' | 'system';

export type Option = {
  label: string;
  description?: string;
  themePreference: ThemePreference;
};

export const themeOptions: Option[] = [
  {
    label: 'Ativado',
    themePreference: 'dark',
  },
  {
    label: 'Desativado',
    themePreference: 'light',
  },
  {
    label: 'Padrão do sistema',
    themePreference: 'system',
    description:
      'A aparência será a mesma que você configurou no seu dispositivo',
  },
];
