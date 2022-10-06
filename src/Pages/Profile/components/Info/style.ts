import { styled } from "goober";
import { Palette } from "@/styles/constants";

export const WorkTags = styled("div")`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const WorkTag = styled("div")`
  padding: 6px 16px;
  width: fit-content;
  font-size: 14px;
  border-radius: 8px;
  margin-right: 12px;
  color: ${Palette.violet};
  background: ${Palette.gray3};
`;
