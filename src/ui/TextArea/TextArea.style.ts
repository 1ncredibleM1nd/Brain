import { styled } from "goober";
import { forwardRef } from "react";
import { Palette } from "@/styles/constants";

export const ScrollWrapper = styled("div")`
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
`;

export const Wrapper = styled("div")`
  min-height: 36px;
  max-height: max(200px, 20vh);
  width: 100%;
  border: 1px solid ${Palette.gray2};
  border-radius: 18px;
  overflow: auto;

  &.hasError {
    border: 1px solid ${Palette.error};
  }
`;

export const StyledTextArea = styled("textarea", forwardRef)`
  display: block;
  width: 100%;
  border: none;
  outline: none;
  padding: 8px 16px;
  font-size: 14px;
  line-height: 20px;
  resize: none;

  &::placeholder {
    color: ${Palette.gray2};
  }
`;
