import {authAdapter} from '../auth-adapter';
import {AuthCredentialsAPI} from '../auth-types';

const authCrendetialsAPI: AuthCredentialsAPI = {
  birthDate: '21/12/2001',
  email: 'johnDoe@gmail.com',
  id: '12345',
  token: '12345646',
  isValid: true,
};
describe('auth-adapter', () => {
  it('should be adapt api data to standardized app data ', () => {
    const ac = authAdapter.toAuthCredentials(authCrendetialsAPI);

    expect(ac.id).toBeTruthy();
  });
});
