import { ReactNode, useId, useState } from "react";
import { Element } from "react-scroll";
import { Down, Favorites, FilledStar, NoFilledStar } from "../../assets/index";
import { IBookDetailsApi } from "../../services/types";
import { useAppDispatch } from "../../store/hooks/hooks";
import { setCart } from "../../store/slices/cartSlice";
import { setFavorite } from "../../store/slices/userSlice";

import {
  AddToCartButton,
  BookImage,
  ImageContainer,
  BookTitle,
  ContainerBook,
  FavoriteContainer,
  ContainerRating,
  Info,
  MainInformation,
  Stars,
  StyledDetailed,
  StyledLink,
  TextInfo,
  ContainerMainInfo,
  ContainerSecondInfo,
  Description,
  Tab,
  Preview,
  Tabs,
} from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";

interface IDetailsBook {
  books: IBookDetailsApi;
}

export const DetailedBook = ({ books }: IDetailsBook) => {
  const navigate = useNavigate();
  const { isAuthorized } = useSelector(({ user }: RootState) => user);
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFavorite = (books: any) => {
    if (isAuthorized) {
      dispatch(setFavorite(books))
    } else  {
      navigate(routes.SIGNUP);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCart = (books: any) => {
    if (isAuthorized) {
    dispatch(setCart(books));
    } else {
      navigate(routes.SIGNUP);
    }
  };

  const id = useId();
  const drawRating = (rating: string): ReactNode[] => {
    const stars = [];
    for (let i = 0; i <= 4; i++) {
      if (i < +rating) {
        stars.push(<FilledStar key={`${id}+${i * 33}`} />);
      } else {
        stars.push(<NoFilledStar key={`${id}+${i * 55}`} />);
      }
    }
    return stars;
  };

  const [active, setActive] = useState<string>("description");
  const handleAuthors = () => {
    setActive("authors");
  };
  const handleDescription = () => {
    setActive("description");
  };

  const chapters = books.pdf ? Object.values(books.pdf) : [];
  return (
    <StyledDetailed>
      <BookTitle>{books?.title ? books.title : "No title"}</BookTitle>
      <ContainerBook>
        <ImageContainer>
          <FavoriteContainer onClick={() => handleFavorite(books)}>
            <Favorites />
          </FavoriteContainer>
          <BookImage src={books?.image} alt={books?.title} />
        </ImageContainer>
        <MainInformation>
          <ContainerMainInfo>
            <Info>Author</Info>
            <TextInfo>{books?.authors ? books.authors : "No author"}</TextInfo>
            <Info>Language</Info>
            <TextInfo>{books?.language}</TextInfo>
            <Info>Rating</Info>
            <ContainerRating>
              <TextInfo>{books?.rating} </TextInfo>
              <Stars>{drawRating(`${books?.rating}`)}</Stars>
            </ContainerRating>
            <Info>Price</Info>
            <TextInfo>
              {books?.price === "$0.00" ? "Free" : books?.price}
            </TextInfo>
          </ContainerMainInfo>
          <StyledLink to="details" duration={500} smooth={true}>
            More detailse
            <Down />
          </StyledLink>
          <AddToCartButton onClick={() => handleCart(books)}>
            ADD TO CART
          </AddToCartButton>
          {chapters.map((chapter) => (
            <Preview href={chapter} key={books.isbn13}>
              Preview book
            </Preview>
          ))}
        </MainInformation>
      </ContainerBook>
      <Element name="details">
        <Tabs>
          <Tab isActive={active === "description"} onClick={handleDescription}>
            Description
          </Tab>
          <Tab isActive={active === "authors"} onClick={handleAuthors}>
            Author
          </Tab>
        </Tabs>
        <Description>
          {active === "description"
            ? books.desc
            : active === "authors"
            ? books.authors
            : "Not Found"}
        </Description>
        <ContainerSecondInfo>
          <Info>Title</Info>
          <TextInfo>{books?.title}</TextInfo>
          <Info>Author</Info>
          <TextInfo>{books?.authors ? books.authors : "No author"}</TextInfo>
          <Info>Language</Info>
          <TextInfo>{books?.language}</TextInfo>
          <Info>Pubisher</Info>
          <TextInfo>{books?.publisher}</TextInfo>
          <Info>Pages</Info>
          <TextInfo>{books?.pages}</TextInfo>
          <Info>Year</Info>
          <TextInfo>{books?.year}</TextInfo>
          <Info>Rating</Info>
          <TextInfo>{books?.rating} </TextInfo>

          <Info>Price</Info>
          <TextInfo>
            {books?.price === "$0.00" ? "Free" : books?.price}
          </TextInfo>
        </ContainerSecondInfo>
      </Element>
    </StyledDetailed>
  );
};
