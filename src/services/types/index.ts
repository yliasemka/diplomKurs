import { RequestStatusType } from "../config/RequestStatus";

export interface IBook {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}
export interface IBookDetailsApi {
  authors: string;
  desc: string;
  error: string;
  image: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pages: string;
  pdf: { [key: string]: string };
  price: string;
  publisher: string;
  rating: string;
  subtitle: string;
  title: string;
  url: string;
  year: string;
}
export interface INewBooksApi {
  books: IBook[];
  error: string;
  total: string;
}
export interface INewBookApi {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
}
export interface IBooksSlice {
  books: IBook[];
  error: any;
  status: RequestStatusType;
}
export interface IBookApi {
  books: IBook[];
  error: any;
  status: RequestStatusType;
  total: string;
  result: IBookDetailsApi;
}

export interface ISearchBookApi extends INewBooksApi {
  page: string;
}

export interface IBookCartItem extends IBookDetailsApi {
  amount: number;
}
export interface ICartStore {
  cartItems: IBookCartItem[];
  total: number;
  isLoading: boolean;
}
