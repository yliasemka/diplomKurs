import { SignUpForm } from "../../components/SignUpForm/SignUpForm";
import { routes } from "../../routes/routes";
import { LinkToSignIn, RegisterTitle, StyledRegister } from "./style";

export const Register = () => {
  return (
    <StyledRegister>
      <RegisterTitle>Become part of our book community!</RegisterTitle>
      <SignUpForm />
      <LinkToSignIn to={routes.SIGNIN}>I already have an account.</LinkToSignIn>
    </StyledRegister>
  );
};
