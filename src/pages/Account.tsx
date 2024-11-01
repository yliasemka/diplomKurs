
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack/ButtonBack";
import { Profile } from "../components/Profile/Profile";
import { routes } from "../routes/routes";
import { RootState } from "../store/store";

export const Account = () => {
  const { isAuthorized } = useSelector(({ user }: RootState) => user);

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
        <Profile />
      </>
    );
  }
  return <Navigate to={routes.SIGNUP} />;
};
