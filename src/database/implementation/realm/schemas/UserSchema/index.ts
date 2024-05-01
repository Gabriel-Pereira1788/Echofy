import {buildUserSchema} from './buildSchema';
import {UserSchema} from './schema';

export const userSchema = {
  schema: UserSchema,
  buildSchema: buildUserSchema,
};
