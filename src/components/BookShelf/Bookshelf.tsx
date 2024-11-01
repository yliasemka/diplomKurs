import styled from "styled-components";
import "./Bookshelf.css";

export const Bookshelf = () => {
  return (
    <StyledBookshelf className="bookshelf_wrapper">
      <ul className="books_list">
        <li className="book_item first"></li>
        <li className="book_item second"></li>
        <li className="book_item third"></li>
        <li className="book_item fourth"></li>
        <li className="book_item fifth"></li>
        <li className="book_item sixth"></li>
      </ul>
      <div className="shelf"></div>
    </StyledBookshelf>
  );
};

const StyledBookshelf = styled.div`
  position: relative;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
