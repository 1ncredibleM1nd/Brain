import { styled } from "goober";
import { Palette } from "@/styles/constants";

export const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

export const RadioButtonLabel = styled("label")`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 1px solid ${Palette.gray};
`;

export const RadioButton = styled("input")<{ checked: boolean }>`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;

  ${({ checked }) =>
    checked &&
    `
    &:checked + ${RadioButtonLabel} {
      background: ${Palette.violet};
      border: 1px solid ${Palette.violet};
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 6px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: white;
      }
    }`}
`;
