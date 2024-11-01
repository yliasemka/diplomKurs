import { css } from "styled-components";
import { media } from "./media";

const H1 = css`
  font-weight: 700;
  font-size: 56px;
  line-height: 64px;

  ${media.PHONE} {
    font-size: 32px;
    line-height: 44px;
  }
`;

const H2 = css`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;

  ${media.PHONE} {
    font-size: 28px;
    line-height: 40px;
  }
`;

const H3 = css`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;

const subtitle = css`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
`;

const bodytext = css`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
`;

const subtitle2 = css`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
`;
const subtitle3 = css`
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
`;
const button = css`
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
`;
const smallButton = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
`;

const input = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: rgb(168, 168, 168);
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: rgb(168, 168, 168);
  }
`;

const link = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgb(49, 48, 55);
`;

const tab = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const typography = {
  H1,
  H2,
  H3,
  subtitle,
  bodytext,
  button,
  input,
  link,
  smallButton,
  tab,
  subtitle2,
  subtitle3,
};
