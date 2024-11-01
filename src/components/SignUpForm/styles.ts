import styled from "styled-components";
import { Colors } from "../../ui/colors";

const StyledSignUpForm = styled.form`
  display: grid;
  row-gap: 20px;

  margin: 20px 0;
  width: 100%;
  max-width: 500px;

  padding: 10px;
`;

const SignUpInput = styled.input`
  font-weight: 16px;
  line-height: 20px;

  color: ${Colors.BLACK};

  padding: 16px;
  width: 100%;

  border-radius: 20px;
  border: 2px solid ${Colors.BLACK};

  &::placeholder {
    color: ${Colors.GREY};
  }
`;

const SignUpButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  color: ${Colors.BLACK};
  background-color: ${Colors.YELLOW};

  width: 100%;
  padding: 10px;

  border-radius: 25px;
  border: 2px solid ${Colors.BLACK};

  cursor: pointer;
`;
export { StyledSignUpForm, SignUpButton, SignUpInput };
