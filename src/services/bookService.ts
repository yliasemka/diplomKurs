import { IBookDetailsApi, INewBooksApi, ISearchBookApi } from "./types";

export const BookServices = () => {
  const API_URL = "https://api.itbook.store/1.0/";

  const getNewBooks = async (): Promise<INewBooksApi>=> {
    try {
      const response = await fetch(`${API_URL}/new`, {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Ошибка при получении новых книг:", error);
      throw error;
    }
  };

  const getBookDetails = async (isbn: string): Promise<IBookDetailsApi> => {
    try {
      const response = await fetch(`${API_URL}/books/${isbn}`, {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Ошибка при получении деталей книги ISBN ${isbn}:`, error);
      throw error;
    }
  };

  const getBooksBySearch = async (title: string, page: string): Promise<ISearchBookApi> => {
    try {
      const response = await fetch(`${API_URL}/search/${title}/${page}`, {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Ошибка при поиске книги по названию ${title}:`, error);
      throw error;
    }
  };

  return { getNewBooks, getBookDetails, getBooksBySearch };
};
