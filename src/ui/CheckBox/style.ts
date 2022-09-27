import { styled } from "goober";
import { Icon } from "../Icon";
import { Palette } from "@/styles/constants";

export const CheckBoxWrapper = styled("label")`
  width: fit-content;
  cursor: pointer;
  margin-bottom: 0;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
`;

export const Input = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
`;

export const SvgWrapper = styled("div")<{ active: boolean; onlyIcon: boolean }>`
  height: 20px;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-right: 10px;
  background: ${Palette.white};
  border: 1px ${Palette.gray2} solid;

  ${({ active }) =>
    active &&
    ` background: ${Palette.gray1};
    border: unset;`}

  ${({ onlyIcon }) => onlyIcon && `margin-right: 0;`}
`;

export const StyledIcon = styled(Icon)`
  height: 10px;
  width: 10px;
  fill: ${Palette.white};
`;

export const Text = styled("div")`
  font-size: 14px;
  line-height: 20px;
  text-transform: capitalize;
`;
