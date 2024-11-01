
import { Heart } from "../../assets/index";
import { INewBookApi } from "../../services/types";
import { useAppDispatch } from "../../store/hooks/hooks";
import { setFavorite } from "../../store/slices/userSlice";

import {
  StyledBookItem,
  BookPrice,
  BookSubtitle,
  BookTitle,
  BookImage,
  StyledLink,
  HeartContainer,
} from "./styles";

interface IBook {
  book: INewBookApi;
}

export const ListItem = ({ book }: IBook) => {
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFavorite = (book: any) => {
    dispatch(setFavorite(book));
  };

  return (
    <StyledBookItem key={book.isbn13}>
      <HeartContainer onClick={() => handleFavorite(book)}>
        <Heart />
      </HeartContainer>
      <StyledLink to={`/books/${book.isbn13}`}>
        <BookImage src={book.image} alt={book.title} />
        <BookTitle>{book.title}</BookTitle>
        <BookSubtitle>{book.subtitle}</BookSubtitle>
        <BookPrice>{book.price === "$0.00" ? "Free" : book.price}</BookPrice>
      </StyledLink>
    </StyledBookItem>
  );
};
