import {setupServer} from 'msw/node';

import {authHandler} from './handlers';

export const server = setupServer(...authHandler);
