import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const RegisterTitle = styled.h2`
  ${typography.H2}
`;
const LinkToSignIn = styled(Link)`
  color: ${Colors.BLACK};
  font-size: 16px;
  font-weight: 400;
`;

export { StyledRegister, RegisterTitle, LinkToSignIn };
