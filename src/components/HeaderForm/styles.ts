import styled from "styled-components";
import { Colors } from "../../ui/colors";

const StyledHeaderForm = styled.form`
  max-width: 542px;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border: 1px solid ${Colors.BLACK};
  box-shadow: 10px 5px 5px ${Colors.YELLOW};
  border-radius: 20px;
`;

export { StyledHeaderForm };
