import { Link } from "react-scroll";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

interface IProps {
  isActive: boolean;
}

export const StyledDetailed = styled.div`
  padding: 20px 30px;
`;

export const MainInformation = styled.div`
  max-width: 448px;
  width: 100%;
  padding-top: 30px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  border-top: 1px solid ${Colors.GREY};
`;

export const ContainerMainInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 90px;
  row-gap: 30px;

  margin-bottom: 30px;

  ${media.TABLET} {
    column-gap: 20px;
    row-gap: 20px;
    margin-bottom: 20px;
  }
  ${media.PHONE} {
    column-gap: 10px;
    row-gap: 5px;
    margin-bottom: 10px;
  }
`;
export const ContainerSecondInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 90px;
  row-gap: 20px;

  width: 100%;
  max-width: 450px;

  margin-bottom: 30px;
  margin-top: 40px;

  ${media.TABLET} {
    column-gap: 20px;
    row-gap: 20px;
    margin-bottom: 20px;
  }
  ${media.PHONE} {
    column-gap: 10px;
    row-gap: 5px;
    margin-bottom: 10px;
  }
`;
export const ContainerBook = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 20px;

  padding-bottom: 50px;

  border-bottom: 1px ${Colors.GREY} solid;
`;

export const BookImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
`;

export const BookTitle = styled.p`
  ${typography.H2}

  color: ${Colors.BLACK};

  margin-bottom: 16px;
`;
export const Info = styled.p`
  ${typography.subtitle}
  font-weight: 300;
  color: ${Colors.GREY};

  ${media.TABLET} {
    ${typography.subtitle2}
    font-weight: 300;
  }
  ${media.PHONE} {
    ${typography.subtitle3}
    font-weight: 300;
  }
`;
export const TextInfo = styled.p`
  ${typography.bodytext}
  font-weight: 500;

  ${media.TABLET} {
    ${typography.subtitle}
  }
  ${media.PHONE} {
    ${typography.subtitle2}
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-self: flex-end;
  align-items: center;

  text-decoration: underline;
  margin-bottom: 20px;

  cursor: pointer;

  ${media.TABLET} {
    margin-bottom: 15px;
  }
  ${media.PHONE} {
    margin-bottom: 10px;
  }
`;
export const ContainerRating = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AddToCartButton = styled.button`
  ${typography.button}

  border-radius: 20px;
  border: 2px solid ${Colors.BLACK};

  width: 100%;
  padding: 10px 0;
  margin-bottom: 20px;
  background-color: ${Colors.ORANGE};

  cursor: pointer;

  &:hover {
    background-color: ${Colors.YELLOW};
  }
  &:active {
    background-color: ${Colors.BLUE};
  }
  ${media.TABLET} {
    width: 80%;
    ${typography.subtitle}
    margin-bottom: 15px;
  }
  ${media.PHONE} {
    width: 70%;
    ${typography.smallButton}
    font-weight: 700;
    margin-bottom: 10px;
  }
`;
export const Stars = styled.div`
  margin-left: 16px;

  ${media.TABLET} {
    margin-left: 7px;
  }
  ${media.PHONE} {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 10px;
  margin-right: 128px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  border: 2px solid ${Colors.BLACK};

  ${media.TABLET} {
    max-width: 250px;
    margin-right: 30px;
  }
  ${media.PHONE} {
    max-width: 150px;
    margin-right: 10px;
    padding: 5px;
  }
`;

export const FavoriteContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px 15px;

  cursor: pointer;

  &:hover {
    background-color: ${Colors.LIGHT_BLUE};
    border-radius: 20px;
  }
  &:active {
    background-color: ${Colors.YELLOW};
    border-radius: 20px;
  }
`;

export const Description = styled.p`
  ${typography.bodytext}
  margin-top: 20px;
  font-weight: 400;

  ${media.TABLET} {
    ${typography.subtitle}
    font-weight: 400;
  }
  ${media.PHONE} {
    ${typography.subtitle2}
    font-weight: 400;
  }
`;

export const Tabs = styled.div`
  border-bottom: 1px solid rgb(231, 231, 231);
`;

export const Tab = styled.button<IProps>`
  ${typography.tab}

  padding: 20px 40px 14px;

  border-bottom: ${({ isActive }) =>
    isActive ? `1px solid ${Colors.YELLOW}` : ""};
  cursor: pointer;
`;

export const Preview = styled.a`
  ${typography.subtitle}
  font-weight: 300;
  color: ${Colors.BLUE};

  cursor: pointer;
`;
