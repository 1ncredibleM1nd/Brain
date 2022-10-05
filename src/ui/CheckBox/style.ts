import { styled } from "goober";
import { Icon } from "../Icon";
import { Palette } from "@/styles/constants";

export const CheckBoxWrapper = styled("label")`
  width: fit-content;
  cursor: pointer;
  margin-bottom: 0;
  margin-top: 10px;
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

export const SvgWrapper = styled("div")<{
  active: boolean;
  onlyIcon: boolean;
  radio?: boolean;
}>`
  height: 20px;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-right: 10px;
  background: ${Palette.white1};
  border: 1px ${Palette.gray} solid;

  ${({ radio }) => radio && `border-radius: 50%;`}

  ${({ active, radio }) =>
    active &&
    radio &&
    ` background: ${Palette.white1};
       `}
  ${({ active, radio }) =>
    active &&
    !radio &&
    `background: ${Palette.violet};
       border: unset;`}

  ${({ onlyIcon }) => onlyIcon && `margin-right: 0;`}
`;

export const StyledIcon = styled(Icon)`
  height: 12px;
  width: 10px;
  fill: ${Palette.white1};
`;

export const Text = styled("div")`
  font-size: 14px;
  line-height: 20px;
  color: ${Palette.gray};
  text-transform: capitalize;
`;
