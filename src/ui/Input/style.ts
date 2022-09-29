import { styled } from "goober";
import { Palette } from "@/styles/constants";

export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const StyledInput = styled("input")`
  padding: 0 14px 0 14px;
  border-radius: 8px;
  height: 46px;
  border: 1px solid ${Palette.gray2};
`;

export const StyledLabel = styled("label")`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
  color: ${Palette.gray};
`;
