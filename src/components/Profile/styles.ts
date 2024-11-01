import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { typography } from "../../ui/typography";

const ChangeForm = styled.form`
  display: grid;
  row-gap: 20px;

  margin: 20px 0;
  width: 100%;
  max-width: 500px;
`;

const ChangeInput = styled.input`
  font-weight: 16px;
  line-height: 20px;

  color: ${Colors.BLACK};

  padding: 16px;
  width: 100%;

  border: 2px solid ${Colors.BLACK};

  &::placeholder {
    color: ${Colors.GREY};
  }
`;
const StyledProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 10px;
`;
const SaveButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  color: ${Colors.BLACK};
  background-color: ${Colors.ORANGE};

  width: 100%;
  padding: 10px;

  border-radius: 25px;
  border: 2px solid ${Colors.BLACK};

  cursor: pointer;
`;

const LabelInput = styled.p`
  ${typography.H3}

  ${media.TABLET} {
    ${typography.bodytext}
  }
  ${media.PHONE} {
    ${typography.subtitle}
  }
`;

const Message = styled.div`
  ${typography.subtitle2}

  color: #00000088;
  background-color: #ebb25788;

  border: none;
  border-radius: 4px;

  padding: 10px;
  width: 200px;
  text-align: center;
`;

export {
  ChangeForm,
  SaveButton,
  ChangeInput,
  StyledProfile,
  LabelInput,
  Message,
};
