export type ThemePreference = 'light' | 'dark' | 'system';

export type Option = {
  label: string;
  description?: string;
  themePreference: ThemePreference;
};

export const themeOptions: Option[] = [
  {
    label: 'Enabled',
    themePreference: 'dark',
  },
  {
    label: 'Disabled',
    themePreference: 'light',
  },
  {
    label: 'System',
    themePreference: 'system',
    description: 'It will be the same as what you configured on your device',
  },
];
