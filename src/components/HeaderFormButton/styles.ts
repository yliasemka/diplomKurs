import styled from "styled-components";
import search from "../../assets/search.svg";

export const StyledHeaderFormButton = styled.button`
  max-width: 24px;
  width: 100%;
  height: 24px;
  margin-right: 10px;

  background-image: url(${search});

  cursor: pointer;
`;
