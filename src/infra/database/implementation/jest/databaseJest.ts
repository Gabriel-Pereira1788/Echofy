import {DatabaseImpl} from '../../types';

export const databaseJest: DatabaseImpl = {
  create: jest.fn(),
  findBy: jest.fn(),
  findById: jest.fn(),
  getAll: jest.fn(() => {
    console.log('Entrou aqui');
    return [];
  }),
  close: jest.fn(),
  open: jest.fn(),
};
