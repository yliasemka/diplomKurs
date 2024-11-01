import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

export const StyledButtonBack = styled.button`
  ${typography.smallButton}

  padding: 7px 30px;
  display: flex;
  align-items: center;

  background-color: ${Colors.BLUE};
  color: ${Colors.BLACK};

  border: 2px solid ${Colors.BLACK};
  border-radius: 15px;

  cursor: pointer;
`;
