import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ListItem } from "../../components/ListItem/ListItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getBooks, getBooksStatus } from "../../store/selectors/booksSelector";
import { fetchBooksBySearch } from "../../store/slices/bookSlice";
import { SpinnerDotted } from "spinners-react";

import {
  Container,
  Pagination,
  PaginationButton,
  SearchDesc,
  SearchTitle,
  StyledBookList,
  StyledLoading,
} from "./styles";

export const Search = () => {
  const { title = "", page = "" } = useParams();
  const { books, total } = useAppSelector(getBooks);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleNextPage = () => {
    if (total && +page < Math.ceil(+total) / 10) {
      navigate(`/react-bookstore/search/${title}/${Number(page) + 1}`);
    }
  };

  const handlePrevPage = () => {
    if (+page > 1) {
      navigate(`/react-bookstore/search/${title}/${Number(page) - 1}`);
    }
  };

  useEffect(() => {
    dispatch(fetchBooksBySearch({ title, page }));
  }, [title, dispatch, page]);

  const status = useAppSelector(getBooksStatus);
  if (status === "loading") {
    return (
      <StyledLoading>
        <SpinnerDotted size={90} thickness={153} speed={149} color="#ffbe0b" />
      </StyledLoading>
    );
  }

  return (
    <Container>
      <SearchTitle>Total according to your search: {total} books</SearchTitle>
      <Pagination>
        <PaginationButton type="button" onClick={handleNextPage}>
          Next
        </PaginationButton>
        <SearchDesc> {page}</SearchDesc>
        <PaginationButton type="button" onClick={handlePrevPage}>
          Previous
        </PaginationButton>
      </Pagination>

      <StyledBookList>
        {books?.map((book) => {
          return <ListItem key={book.isbn13} book={book} />;
        })}
      </StyledBookList>
    </Container>
  );
};
