import {Trash}  from "../../assets/index";
import { IBookCartItem, IBookDetailsApi } from "../../services/types/index";
import { useAppDispatch } from "../../store/hooks/hooks";
import { deleteCart } from "../../store/slices/cartSlice";
import {
  AdditionalContainer,
  BookImage,
  BookPrice,
  BookSubtitle,
  BookTitle,
  Container,
  InfoContainer,
  StyledItemCart,
  StyledLink,
  TrashContainer,
} from "./style";

interface IBook {
  book: IBookCartItem;
}

export const CartItem = ({ book }: IBook) => {
  const dispatch = useAppDispatch();
  const handleCart = (book: IBookDetailsApi) => {
    dispatch(deleteCart(book));
  };

  return (
    <Container>
      <StyledItemCart>
        <StyledLink to={`/react-bookstore/books/${book.isbn13}`}>
          <BookImage src={book.image} alt={book.title} />
          <InfoContainer>
            <BookTitle>{book.title}</BookTitle>
            <BookSubtitle>{book.subtitle}</BookSubtitle>
          </InfoContainer>
          <AdditionalContainer>
            <BookPrice>
              {book.price === "$0.00" ? "Free" : book.price}
            </BookPrice>
          </AdditionalContainer>
        </StyledLink>
      </StyledItemCart>
      <TrashContainer onClick={() => handleCart(book)}>
        <Trash/>
      </TrashContainer>
    </Container>
  );
};
