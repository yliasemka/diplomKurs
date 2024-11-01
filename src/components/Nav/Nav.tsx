import { Link } from "react-router-dom";
import { Account, Cart, Favorites } from "../../assets/index";
import { routes } from "../../routes/routes";
import { StyledNav } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Nav = () => {
  const { isAuthorized } = useSelector(({ user }: RootState) => user);
  return (
    <StyledNav>
      {!isAuthorized ?<Link to={routes.ACCOUNT}>
        <Account />
      </Link> : "lOG OUT" }
      <Link to={routes.CART}>
        <Cart />
      </Link>
      <Link to={routes.FAVORITES}>
        <Favorites />
      </Link>
    </StyledNav>
  );
};
