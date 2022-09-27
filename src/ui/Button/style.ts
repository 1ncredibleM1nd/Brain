import { styled } from "goober";
import { Palette } from "@/styles/constants";
import { ReactChildren, ReactNode } from "react";

type TButtonSize = "sm" | "md";
type TButtonTextPlacement = "textLeft" | "textRight" | "textCenter";
type TButtonType = "primary" | "secondary" | "ghost" | "link";
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
  transition: color ${Palette.transition},
    background-color ${Palette.transition};
  line-height: 20px;
  cursor: pointer;

  &:hover {
    transition: color  ${Palette.transition};,
  }

  ${({ size }) => {
    const sizes = {
      sm: `  font-size: 12px;
    padding: 4px 16px;`,
      md: `  font-size: 14px;
    padding: 8px 16px;`,
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
      primary: ` color: ${Palette.white};
                 background: ${Palette.green1};
                 &:hover {
                   background: ${Palette.green2};}`,
      secondary: `color: ${Palette.black};
                  background: ${Palette.gray7};
                   &:hover {
                     background: ${Palette.gray2};}`,
      ghost: `background: none;
              color: ${Palette.black};
               &:hover {
                 background: ${Palette.gray2};
              }`,
      link: `  color: ${Palette.black};
               position: relative;
               background: none;
               padding: 0;
               min-width: auto;

              &:hover {
                color: ${Palette.green2};
              }`,
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
      rounded: `border-radius: 18px;`,
      square: `border-radius: 0;`,
    };
    return shapes[shape];
  }}

  &:disabled {
    cursor: default;
  }
`;
