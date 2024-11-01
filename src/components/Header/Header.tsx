import { Nav } from "../Nav/Nav";
import { StyledHeader } from "./style";

import { Link } from "react-router-dom";
import HeaderForm from "../HeaderForm/HeaderForm";
import { Logo } from "../../assets/index";
import { routes } from "../../routes/routes";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to={routes.HOME}>
        <Logo />
      </Link>
      <HeaderForm />
      <Nav />
    </StyledHeader>
  );
};
