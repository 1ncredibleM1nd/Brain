import { observer } from "mobx-react-lite";
import { SVGProps } from "react";

enum IconSize {
  xs = 14,
  sm = 18,
  md = 24,
  lg = 30,
  xl = 36,
}

export type TIconSize = keyof typeof IconSize;

export type TIconProps = {
  width?: number;
  height?: number;
  name: string;
  size?: TIconSize;
  interactive?: boolean;
  asButton?: boolean;
  className?: string;
} & SVGProps<SVGSVGElement>;

export const Icon = observer(
  ({
    width = 18,
    height = 18,
    name,
    fill,
    asButton,
    size,
    interactive = false,
    ...svgProps
  }: TIconProps) => {
    const iconWidth = size ? IconSize[size] : width;
    const iconHeight = size ? IconSize[size] : height;

    return (
      <svg
        style={{ cursor: asButton ? "pointer" : "auto" }}
        {...svgProps}
        width={`${iconWidth}px`}
        height={`${iconHeight}px`}
      >
        <use href={`#${name}`} fill={fill} />
      </svg>
    );
  },
);
