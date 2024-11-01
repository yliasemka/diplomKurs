import { StyledTextFooter } from "./styles";
interface ITextFooter {
  children: string;
}

const TextFooter = ({ children }: ITextFooter) => {
  return <StyledTextFooter>{children}</StyledTextFooter>;
};
export default TextFooter;
