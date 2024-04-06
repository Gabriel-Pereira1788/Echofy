export interface DatabaseImpl {
  open: () => Promise<void>;
  create<TData>(schema: string, data: Partial<TData>): void;
  findById<TData>(schema: string, id: number): Promise<TData>;
  findBy<TData>(schema: string, filter: string): Promise<TData>;
  getAll<TData>(schema: string): Promise<TData>;
  close: () => void;
}

export enum Schemas {
  BookCategory = '@BookCategorySchema',
  Book = '@BookSchema',
  BookSection = '@BookSectionSchema',
}
