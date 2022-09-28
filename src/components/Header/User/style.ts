import { styled } from "goober";
import { Palette } from "@/styles/constants";

export const Wrapper = styled("div")`
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

export const InfoWrapper = styled("div")`
  margin-left: 16px;
`;

export const Name = styled("span")`
  display: block;
  font-size: 16px;
  font-weight: 600;
`;

export const Mail = styled("span")`
  font-size: 12px;
  color: ${Palette.gray};
`;
