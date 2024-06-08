import {useAuthContext} from '../../providers/AuthProvider';
import {useShowOnboarding} from '../../services/settings';

export type Stacks = 'Onboarding' | 'Auth' | 'App';
export function useStackRouter(): Stacks {
  const showOnBoarding = useShowOnboarding();
  const {credentials} = useAuthContext();
  if (showOnBoarding) {
    return 'Onboarding';
  }

  if (credentials && !credentials.firstLogin) {
    return 'App';
  }

  return 'Auth';
}
