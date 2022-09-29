import { styled } from "goober";
import { Palette } from "@/styles/constants";

export const PageHeader = styled("h2")`
  font-size: 22px;
  margin-bottom: 32px;
  font-weight: bold;
  color: ${Palette.black};
`;

export const BlockHeader = styled("h3")`
  margin-top: 32px;
  margin-bottom: 26px;
  font-size: 14px;
  font-weight: 500;
  color: ${Palette.violet};
  line-height: 20px;
`;
