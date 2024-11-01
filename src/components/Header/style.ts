import styled from "styled-components";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 72px;
  padding-top: 24px;
  padding-bottom: 24px;

  border-bottom: 1px ${Colors.GREY} solid;
`;
const StyledIcon = styled.img`
  width: 137px;
  height: 28px;

  ${media.PHONE} {
    width: 122px;
    height: 25px;
  }
`;

export { StyledIcon, StyledHeader };
