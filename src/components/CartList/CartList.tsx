import { useEffect, useState } from "react";
import { IBookCartItem } from "../../services/types";
import { CartItem } from "../CartItem/CartItem";
import { StyledListCart, StyledTotal, TitleTotal, TotalPrice } from "./style";

interface ICart {
  books: IBookCartItem[];
}

export const CartList = ({ books }: ICart) => {
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    let totalAmount = 0.0;
    books.forEach((book) => {
      totalAmount += Number(book.price.slice(1));
    });
    setTotal(totalAmount);
  }, [books]);

  return (
    <>
      <StyledTotal>
        <TitleTotal>Total: </TitleTotal>
        <TotalPrice>{total.toFixed(2)}$</TotalPrice>
      </StyledTotal>
      <StyledListCart>
        {books.map((book) => {
          return <CartItem key={book.isbn13} book={book} />;
        })}
      </StyledListCart>
    </>
  );
};
