import { Breakpoint } from "./breakpoints";

export const media = {
  PHONE: `@media (max-width: ${Breakpoint.SM}px)`,
  TABLET: `@media (max-width: ${Breakpoint.MD}px)`,
  LAPTOP: `@media (max-width: ${Breakpoint.XL}px)`,
};
