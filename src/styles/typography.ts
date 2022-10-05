import { styled } from "goober";
import { Palette } from "@/styles/constants";

export const PageHeader = styled("h2")`
  font-size: 22px;
  margin-top: 24px;
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

export const BlockDescription = styled("p")`
  margin: 8px 0 20px;
  padding: 0;
  color: ${Palette.gray};
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.015em;
  max-width: 395px;

  a {
    color: ${Palette.violet};
    cursor: pointer;
  }
`;
