import Realm from 'realm';

import {IBookCategorySchema} from '../../../../../interfaces';
import {Schemas} from '../../../../../types';

export function update(realm: Realm) {
  return (id: string, newData: Partial<IBookCategorySchema>) => {
    const categories = realm
      .objects<IBookCategorySchema>(Schemas.BookCategory)
      .filtered('_id == $0', id);

    if (categories && categories.length > 0) {
      const categoryToUpdate = categories[0];

      categoryToUpdate.text = newData.text
        ? newData.text
        : categoryToUpdate.text;
    }
  };
}
