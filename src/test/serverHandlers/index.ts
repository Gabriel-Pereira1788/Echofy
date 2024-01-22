import {setupServer} from 'msw/node';

import {authSignInHandler} from './handlers';

export const server = setupServer(...authSignInHandler);
