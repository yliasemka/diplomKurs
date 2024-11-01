
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Container, StyledMainTeplate } from "./style";

export const MainTemplate = () => {
  return (
    <StyledMainTeplate>
      <Container>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </StyledMainTeplate>
  );
};
