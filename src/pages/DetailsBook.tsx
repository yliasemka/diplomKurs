import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack/ButtonBack";
import { DetailedBook } from "../components/DetailedBook/DetailedBook";
import Subscribe from "../components/Subscribe/Subscribe";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { getBooks } from "../store/selectors/booksSelector";
import { fetchBookDetails } from "../store/slices/bookSlice";

export const DetailsBook = () => {
  const { id = "" } = useParams();
  const { result } = useAppSelector(getBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, [id, dispatch]);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <ButtonBack type="button" handleBack={handleBack}>
        Back
      </ButtonBack>
      <DetailedBook books={result}></DetailedBook>
      <Subscribe />
    </div>
  );
};
