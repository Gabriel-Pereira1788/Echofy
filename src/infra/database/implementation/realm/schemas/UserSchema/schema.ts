import Realm, {BSON, ObjectSchema} from 'realm';

import {Schemas} from '../../../../types';

export class UserSchema extends Realm.Object<UserSchema> {
  _id!: BSON.ObjectID;
  name!: string;
  static schema: ObjectSchema = {
    name: Schemas.User,
    properties: {
      id: {type: 'string'},
      isValid: {type: 'bool'},
      birthDate: {type: 'string'},
      email: {type: 'string'},
      token: {type: 'string'},
      firstLogin: {type: 'bool'},
      userCategories: {type: 'list', objectType: 'string'},
    },
    primaryKey: 'id',
  };
}
