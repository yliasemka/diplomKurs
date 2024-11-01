import { Link } from "react-router-dom";
import styled from "styled-components";
import { SignInForm } from "../components/SignInForm/SignInForm";
import { routes } from "../routes/routes";
import { Colors } from "../ui/colors";
import { typography } from "../ui/typography";

export const Signin = () => {
  return (
    <StyledSignIn>
      <SignInTitle>Welcome Back!</SignInTitle>
      <SignInForm />
      <LinkToSignIn to={routes.SIGNUP}>I dont have an account.</LinkToSignIn>
    </StyledSignIn>
  );
};
const StyledSignIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const SignInTitle = styled.h2`
  ${typography.H2}
`;
const LinkToSignIn = styled(Link)`
  color: ${Colors.BLACK};
  font-size: 16px;
  font-weight: 400;
`;
