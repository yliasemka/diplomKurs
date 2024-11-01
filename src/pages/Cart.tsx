import { Navigate, useNavigate } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack/ButtonBack";
import { CartList } from "../components/CartList/CartList";
import { routes } from "../routes/routes";
import { useAppSelector } from "../store/hooks/hooks";
import { getCart } from "../store/selectors/cartSelector";
import { getUserInfo } from "../store/selectors/userSelector";

export const Cart = () => {
  const { isAuthorized } = useAppSelector(getUserInfo);
  const { cartItems } = useAppSelector(getCart);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  if (isAuthorized) {
    return (
      <>
        <ButtonBack type="button" handleBack={handleBack}>
          Back
        </ButtonBack>
        <CartList books={cartItems} />
      </>
    );
  }

  return <Navigate to={routes.SIGNUP} />;
};
