import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HeaderFormButton } from "../HeaderFormButton/HeaderFormButton";
import { StyledHeaderForm } from "./styles";

const HeaderForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    navigate(`search/${data.title}/1`);
  };
  return (
    <StyledHeaderForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput placeholder="search..." type="text" {...register("title")} />
      <HeaderFormButton />
    </StyledHeaderForm>
  );
};
export default HeaderForm;

const StyledInput = styled.input`
  max-width: 542px;
  border-radius: 20px;
  width: 100%;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 20px;
  border: none;
`;
