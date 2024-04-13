import Realm from 'realm';

import {IBookSectionSchema} from '../../../../../interfaces';
import {CrudSchemaData, Schemas} from '../../../../../types';

export function update(realm: Realm) {
  return (
    id: string,
    newData: Partial<CrudSchemaData<Schemas.BookSection>>,
  ) => {
    const bookSections = realm
      .objects<IBookSectionSchema>(Schemas.Book)
      .filtered('id == $0', id);

    if (bookSections && bookSections.length > 0) {
      const bookSectionToUpdate = bookSections[0];
      realm.write(() => {
        bookSectionToUpdate.docs = newData.docs
          ? newData.docs
          : bookSectionToUpdate.docs;
        bookSectionToUpdate.nextPage = newData.nextPage
          ? newData.nextPage
          : bookSectionToUpdate.nextPage;
        bookSectionToUpdate.page = newData.page
          ? newData.page
          : bookSectionToUpdate.page;
        bookSectionToUpdate.prevPage = newData.prevPage
          ? newData.prevPage
          : bookSectionToUpdate.prevPage;
        bookSectionToUpdate.totalDocs = newData.totalDocs
          ? newData.totalDocs
          : bookSectionToUpdate.totalDocs;
        bookSectionToUpdate.totalPages = newData.totalPages
          ? newData.totalPages
          : bookSectionToUpdate.totalPages;
      });
    }
  };
}
