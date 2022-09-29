import React, { HTMLProps } from "react";
import { observer } from "mobx-react-lite";
import { StyledButton } from "@/ui/Button/style";

type TButtonSize = "sm" | "md";
type TButtonType = "primary" | "secondary";
type TButtonShape = "rounded" | "roundedLeft" | "roundedRight" | "square";
type TButtonFit = "cover" | "contain";
type TTextPosition = "textLeft" | "textRight" | "textCenter";

export type TProps = {
  children: any;
  type?: TButtonType;
  fit?: TButtonFit;
  textPosition?: TTextPosition;
  size?: TButtonSize;
  shape?: TButtonShape;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & Omit<HTMLProps<HTMLButtonElement>, "size">;

export const Button = observer(
  ({
    type = "primary",
    textPosition = "textCenter",
    size = "md",
    shape = "rounded",
    fit = "contain",
    children,
    onClick,
    className,
    ...props
  }: TProps) => {
    return (
      <StyledButton
        type={type}
        size={size}
        textPosition={textPosition}
        fit={fit}
        shape={shape}
        onClick={(ev: MouseEvent) => onClick?.(ev)}
        {...props}
      >
        {children}
      </StyledButton>
    );
  },
);
