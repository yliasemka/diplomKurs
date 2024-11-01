import styled from "styled-components";
import { Colors } from "../../ui/colors";

const StyledSignInForm = styled.form`
  display: grid;
  row-gap: 20px;

  margin: 20px 0;
  width: 100%;
  max-width: 500px;

  padding: 10px;
`;

const SignInInput = styled.input`
  font-weight: 16px;
  line-height: 20px;

  color: ${Colors.BLACK};

  border: 2px solid ${Colors.BLACK};
  border-radius: 20px;

  width: 100%;
  padding: 16px;

  &::placeholder {
    color: ${Colors.GREY};
  }
`;

const SignInButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  color: ${Colors.BLACK};

  padding: 10px;
  width: 100%;

  border-radius: 25px;
  border: 2px solid ${Colors.BLACK};

  background-color: ${Colors.ORANGE};

  cursor: pointer;
`;
export { StyledSignInForm, SignInInput, SignInButton };
