import { useNavigate } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack/ButtonBack";
import { ListFavorites } from "../components/ListFavorites/ListFavorites";

export const Favorites = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <ButtonBack type="button" handleBack={handleBack}>
        Back
      </ButtonBack>
      <ListFavorites />
    </>
  );
};
