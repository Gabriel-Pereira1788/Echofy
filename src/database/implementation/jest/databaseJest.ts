import {DatabaseImpl} from '../../types';

export const databaseJest: DatabaseImpl = {
  create: jest.fn(),
  findBy: jest.fn(),
  reset: jest.fn(),
  findById: jest.fn(),
  readPaginatedResult: jest.fn(() => {
    return null;
  }),
  getAll: jest.fn(async () => {
    return [];
  }),
  close: jest.fn(),
  open: jest.fn(),
  read: jest.fn(),
  deleteData: jest.fn(),
  update: jest.fn(),
};
