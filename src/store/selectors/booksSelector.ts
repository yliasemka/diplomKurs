import { RootState } from "../store";

export const getBooksItem = (state: RootState) => state.books.books;
export const getBooksStatus = (state: RootState) => state.books.status;
export const getBooksError = (state: RootState) => state.books.error;

export const getBooks = (state: RootState) => state.books;
