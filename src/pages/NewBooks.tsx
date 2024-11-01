import styled from "styled-components";
import { ListHome } from "../components/ListHome/ListHome";
import Subscribe from "../components/Subscribe/Subscribe";

import { typography } from "../ui/typography";

export const NewBooks = () => {
  return (
    <>
      <NewBooksTitle>New Releases Books:</NewBooksTitle>
      <ListHome />
      <Subscribe />
    </>
  );
};
const NewBooksTitle = styled.h2`
  ${typography.H2}
  margin-bottom: 20px;
`;
