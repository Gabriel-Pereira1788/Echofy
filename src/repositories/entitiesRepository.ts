import {netStatus} from '@infra';

import {
  bookApiRepository,
  bookLocalRepository,
  categoryApiRepository,
  categoryLocalRepository,
  reviewApiRepository,
  reviewLocalRepository,
} from './entities';
import {QueueManager} from './queueManager';
import {
  ActionMode,
  Entity,
  EntityName,
  EntityQuery,
  EntityRepository,
  EntitySync,
} from './types';

const mappedEntities: Record<EntityName, Entity> = {
  review: {
    api: reviewApiRepository,
    local: reviewLocalRepository,
  },
  book: {
    api: bookApiRepository,
    local: bookLocalRepository,
  },
  category: {
    api: categoryApiRepository,
    local: categoryLocalRepository,
  },
};
async function read<Name extends EntityName>(
  entityName: Name,
  query?: EntityQuery<Name>,
) {
  const entity = mappedEntities[entityName];
  const localResult = await entity.local.get(query!);

  if (localResult && Array.isArray(localResult) && localResult.length > 0) {
    return localResult;
  }

  if (localResult && 'docs' in localResult && localResult.docs.length > 0) {
    return localResult;
  }

  if (localResult && !('docs' in localResult) && !Array.isArray(localResult)) {
    return localResult;
  }

  const apiResult = await entity.api.get(query!);

  if (apiResult) {
    entity.local.create && (await entity.local.create(apiResult));
    return apiResult as ReturnType<EntityRepository<Name>['get']>;
  } else {
    return null;
  }
}

async function findById<Name extends 'book'>(entityName: Name, id: string) {
  const entity = mappedEntities[entityName];

  const localResult = await entity.local.findById?.(id);
  if (localResult) {
    return localResult as ReturnType<EntityRepository<Name>['findById']>;
  } else {
    const apiResult = await entity.api.findById?.(id);
    if (apiResult) {
      entity.local.create && (await entity.local.create(apiResult));
      return apiResult as ReturnType<EntityRepository<Name>['findById']>;
    } else {
      return null;
    }
  }
}

async function post<Name extends 'review'>(
  entityName: Name,
  body: Parameters<EntityRepository<Name>['post']>[0],
) {
  const entity = mappedEntities[entityName];
  if (netStatus.connectionStatus && netStatus.connectionStatus.connected) {
    const result = await entity.api.post?.(body);
    await entity.local.post?.(result);
  } else {
    const data = await entity.local.post?.(body);
    if (data && data.local_id) {
      QueueManager.addToQueueRequest({
        entity: entityName,
        localId: data.local_id,
        action: 'CREATE',
        data,
      });
    }
  }
}

type UpdateProps<Name extends 'book'> = {
  entityName: Name;
  id: string;
  body: Parameters<EntityRepository<Name>['update']>[1];
  mode: ActionMode;
};
async function update<Name extends 'book'>({
  entityName,
  id,
  body,
  mode = 'auto',
}: UpdateProps<Name>) {
  console.log('BODY', body);
  const entity = mappedEntities[entityName];
  if (mode === 'local') {
    entity.local.update?.(id, body);
    return;
  }
}

async function sync(entitySync: EntitySync) {
  const entity = mappedEntities[entitySync.entity];
  switch (entitySync.action) {
    case 'CREATE':
      const result = await entity.api.post?.(entitySync.data);
      await entity.local.deleteData?.(entitySync.localId);
      await entity.local.post?.(result);
      break;
    case 'DELETE':
      break;
    case 'UPDATE':
      break;
  }
}

export const EntitiesRepository = {
  read,
  post,
  findById,
  sync,
  update,
};
