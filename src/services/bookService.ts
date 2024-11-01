import axios from "axios";
import { IBookDetailsApi, INewBooksApi, ISearchBookApi } from "./types";

class BookService {
  private readonly API_URL = "https://api.itbook.store/1.0/";
  private api = axios.create({
    baseURL: this.API_URL,
  });

  public async getNewBooks(): Promise<any> {
    const { data } = await this.api.get<INewBooksApi>("/new");
    return data;
  }
  public async getBookDetails(isbn: string): Promise<IBookDetailsApi> {
    const { data } = await this.api.get<IBookDetailsApi>(`/books/${isbn}`);
    return data;
  }
  public async getBooksBySearch(
    title: string,
    page: string
  ): Promise<ISearchBookApi> {
    const { data } = await this.api.get<ISearchBookApi>(
      `/search/${title}/${page}`
    );
    return data;
  }
}
export const bookApi = new BookService();
