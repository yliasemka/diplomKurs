import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

export const StyledItemCart = styled.li`
  width: 100%;
  padding: 5px 50px;

  border: 2px solid ${Colors.BLACK};
  border-radius: 20px;

  transition: all 0.5s ease-out;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 10px 5px 5px ${Colors.BLUE};
  }
  ${media.TABLET} {
    padding: 5px 30px;
  }

  ${media.PHONE} {
    padding: 5px 20px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-right: 20px;
  max-width: 280px;
  width: 100%;

  ${media.TABLET} {
    width: 100%;
    margin-right: 10px;
  }

  ${media.PHONE} {
    width: 100%;
    margin-right: 5px;
  }
`;
export const TrashContainer = styled.div`
  cursor: pointer;

  margin-left: 20px;
  ${media.PHONE} {
    margin-right: 10px;
  }
`;
export const AdditionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  text-decoration: none;
`;

export const BookImage = styled.img`
  width: 140px;
  margin-right: 10px;

  ${media.LAPTOP} {
    width: 120px;
    margin-right: 5px;
  }

  ${media.PHONE} {
    width: 100px;
    margin-right: 0;
  }
`;

export const BookPrice = styled.p`
  ${typography.subtitle}

  color: ${Colors.ORANGE};
`;
export const BookTitle = styled.p`
  ${typography.subtitle2}

  color: ${Colors.BLACK};
`;
export const BookSubtitle = styled.p`
  ${typography.subtitle3};

  color: ${Colors.GREY};
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
