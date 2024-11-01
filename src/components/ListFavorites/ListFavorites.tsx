
import { Navigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import { useAppSelector } from "../../store/hooks/hooks";
import { getUserInfo } from "../../store/selectors/userSelector";
import { ItemFavorites } from "../ItemFavorites/ItemFavorites";
import { StyledListFavorites } from "./styles";

export const ListFavorites = () => {
  const { isAuthorized, favorites } = useAppSelector(getUserInfo);

  if (isAuthorized) {
    return (
      <StyledListFavorites>
        {favorites.map((book) => {
          return <ItemFavorites key={book.isbn13} book={book} />;
        })}
      </StyledListFavorites>
    );
  }
  return <Navigate to={routes.SIGNUP} />;
};
