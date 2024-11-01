import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledBookItem = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  max-width: 352px;

  border: 3px solid ${Colors.BLACK};
  box-shadow: 10px 5px 5px ${Colors.RED};
  border-radius: 20px;

  cursor: pointer;

  transition: all 0.5s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 10px 5px 5px ${Colors.BLUE};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const BookImage = styled.img`
  max-width: 226px;
`;

const BookTitle = styled.h3`
  ${typography.H3}

  color: ${Colors.BLACK};
`;

const BookSubtitle = styled.p`
  ${typography.subtitle3}

  color: ${Colors.GREY};

  margin-bottom: 40px;
`;

const BookPrice = styled.h3`
  ${typography.H3}

  color: ${Colors.ORANGE};

  margin-bottom: 10px;
`;

const HeartContainer = styled.div`
  align-self: flex-end;
  margin: 10px 0 0;
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

export {
  HeartContainer,
  StyledBookItem,
  BookPrice,
  BookSubtitle,
  BookTitle,
  BookImage,
  StyledLink,
};
