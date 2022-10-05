import { styled } from "goober";
import { forwardRef } from "react";
import { Palette } from "@/styles/constants";

export const ScrollWrapper = styled("div")`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

export const Label = styled("span")`
  display: block;
  max-width: 600px;
  font-weight: 500;
  margin-top: 26px;
  font-size: 14px;
  letter-spacing: 0.015em;
  margin-bottom: 8px;
  line-height: 20px;
  color: ${Palette.gray};
`;

export const Description = styled("span")`
  display: block;
  letter-spacing: 0.015em;
  max-width: 600px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${Palette.black2};
`;

export const Wrapper = styled("div")`
  min-height: 36px;
  max-height: max(200px, 20vh);
  width: 600px;
  border: 1px solid ${Palette.gray2};
  border-radius: 8px;
  overflow: auto;
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
