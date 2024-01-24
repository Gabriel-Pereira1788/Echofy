import {setupServer} from 'msw/node';

import {authHandler, authCredentialsMock} from './handlers';

export {authCredentialsMock};
export const server = setupServer(...authHandler);
