export * from './entities/Category';
export * from './entities';
export type {ActionMode} from './types';
export {QueueManager} from './queueManager';
export {managerRepositoryData} from './managerRepositoryData';
import {
  deleteHandler,
  findByIdHandler,
  postHandler,
  readHandler,
  syncHandler,
  updateHandler,
} from './handlers';

export const EntitiesRepository = {
  read: readHandler,
  post: postHandler,
  findById: findByIdHandler,
  sync: syncHandler,
  update: updateHandler,
  deleteData: deleteHandler,
};
