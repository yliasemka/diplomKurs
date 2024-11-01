import styled from "styled-components";
import { typography } from "../../ui/typography";

const StyledBookList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;

  width: 100%;
  max-width: 960px;

  list-style: none;
  padding: 0;
  margin: 0 auto;
`;
const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const ErrorTitle = styled.p`
  ${typography.H2}
`;
const ErrorText = styled.p`
  ${typography.bodytext}
  margin-bottom: 240px;
`;

export { ErrorText, ErrorTitle, StyledBookList, ErrorContainer, StyledLoading };
