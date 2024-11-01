import { Bookshelf } from "../../components/BookShelf/Bookshelf";
import Subscribe from "../../components/Subscribe/Subscribe";
import { routes } from "../../routes/routes";
import {
  Container,
  ContainerBookShelf,
  ContainerText,
  HomeDescription,
  HomeTitle,
  StyledHome,
  StyledLink,
} from "./style";

export const Home = () => {
  return (
    <>
      <StyledHome>
        <Container>
          <ContainerText>
            <HomeTitle>A Book Worm's Paradise</HomeTitle>
            <HomeDescription>
              There are many ways to spend your time... Choose the best one.
            </HomeDescription>
          </ContainerText>
          <StyledLink to={routes.NEWBOOKS}>SHOP NOW</StyledLink>
        </Container>
        <ContainerBookShelf>
          <Bookshelf />
        </ContainerBookShelf>
      </StyledHome>

      <Subscribe />
    </>
  );
};
