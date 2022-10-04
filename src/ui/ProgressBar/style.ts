import { styled } from "goober";
import { Palette } from "@/styles/constants";

export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 6px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const ProgressWrapper = styled("div")`
  background: ${Palette.gray};
  width: 650px;
  height: 6px;
  border-radius: 2px;
`;

export const ProgressLine = styled("div")<{ value: string }>`
  ${({ value }) => value && `width: ${value}%;`}

  height: 6px;
  background: ${Palette.violet};
`;

export const LabelValue = styled("span")`
  display: block;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${Palette.violet};
  margin-right: 10px;
`;

export const LabelText = styled("span")`
  font-size: 14px;
  font-weight: bold;
  color: ${Palette.black};
`;
