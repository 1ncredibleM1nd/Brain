import { styled } from "goober";
import { Palette } from "@/styles/constants";
import { ReactChildren, ReactNode } from "react";

type TButtonSize = "sm" | "md";
type TButtonTextPlacement = "textLeft" | "textRight" | "textCenter";
type TButtonType = "primary" | "secondary";
type TButtonFit = "cover" | "contain";
type TButtonShape = "rounded" | "roundedLeft" | "roundedRight" | "square";

interface TProps {
  type: TButtonType;
  size: TButtonSize;
  fit: TButtonFit;
  shape: TButtonShape;
  textPosition: TButtonTextPlacement;
  disabled?: boolean;
  children?: ReactNode | ReactChildren;
}

export const StyledButton = styled<TProps>("button")`
  display: flex;
  min-width: 80px;
  align-items: center;
  outline: none !important;
  border: none;
  line-height: 20px;
  cursor: pointer;

  ${({ size }) => {
    const sizes = {
      sm: `  font-size: 14px;
             padding: 13px 37px;`,
      md: `  font-size: 14px;
             padding: 13px 48px;`,
    };
    return sizes[size];
  }}

  ${({ textPosition }) => {
    const positions = {
      textLeft: `justify-content: flex-start;`,
      textRight: `justify-content: flex-end;
                  padding-right: 0 !important;`,
      textCenter: `justify-content: center;`,
    };
    return positions[textPosition];
  }}

  ${({ type }) => {
    const types = {
      primary: ` color: ${Palette.white1};
                 background: ${Palette.violet};
                 &:hover {
                   background: ${Palette.violet};}`,
      secondary: `color: ${Palette.violet};
                  background: ${Palette.white1};
                  border: 1px solid ${Palette.violet};
                   &:hover {
                     background: ${Palette.white2};}`,
    };
    return types[type];
  }}

  ${({ fit }) => {
    const fits = {
      cover: `flex: 3 1 auto;`,
      contain: `flex: 0 1 auto;`,
    };
    return fits[fit];
  }}

  ${({ shape }) => {
    const shapes = {
      roundedRight: `border-top-right-radius: 8px;
                     border-bottom-right-radius: 8px;`,
      roundedLeft: `border-top-left-radius: 8px;
                    border-bottom-left-radius: 8px;`,
      rounded: `border-radius: 10px;`,
      square: `border-radius: 0;`,
    };
    return shapes[shape];
  }}

  &:disabled {
    color: ${Palette.disabled};
    cursor: default;
  }
`;
