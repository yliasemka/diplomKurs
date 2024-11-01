import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledBookList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;

  width: 100%;
  max-width: 960px;

  list-style: none;

  padding: 0;
  margin: 0 auto;
`;
export const SearchTitle = styled.h3`
  ${typography.H3}

  margin-bottom: 20px;
`;
export const SearchDesc = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 20px;
`;
export const Pagination = styled.div`
  width: 180px;

  display: flex;
  justify-content: space-between;
  align-self: center;

  margin-bottom: 30px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PaginationButton = styled.button`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;

  border-bottom: 1px ${Colors.BLACK} solid;

  cursor: pointer;
`;

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;
