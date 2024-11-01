import { Link } from "react-router-dom";
import { Account, Cart, Favorites } from "../../assets/index";
import { routes } from "../../routes/routes";
import { StyledNav } from "./styles";

export const Nav = () => {
  return (
    <StyledNav>
      <Link to={routes.ACCOUNT}>
        <Account />
      </Link>
      <Link to={routes.CART}>
        <Cart />
      </Link>
      <Link to={routes.FAVORITES}>
        <Favorites />
      </Link>
    </StyledNav>
  );
};
