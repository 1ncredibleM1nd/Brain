import { styled } from "goober";
import { forwardRef } from "react";
import { Palette } from "@/styles/constants";

type TModalSize = "lg" | "md" | "sm";

export const ModalBackground = styled("div")`
  background: ${Palette.modal_overlay_color};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ModalOverlay = styled("div")<{ fitContent: boolean }>`
  z-index: 1051;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ fitContent }) =>
    fitContent &&
    ` @media (max-width: 480px) {
      justify-content: flex-start;

      > div {
        height: 100%;
        width: 100% !important;
        max-width: 100%;
        max-height: 100%;
        border-radius: 0;
      }
    }`}
`;

export const ModalWrapper = styled("div", forwardRef)<{ size: TModalSize }>`
  background: ${Palette.white};
  box-shadow: ${Palette.modal_shadow};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: calc(100% - 36px);
  max-height: calc(100% - 50px);
  z-index: 1052;
  overflow: hidden;

  ${({ size }) => {
    const sizes = {
      lg: `width: 600px;`,
      md: `width: 400px;`,
      sm: `width: 304px;`,
    };
    return sizes[size];
  }}
`;

export const ModalBlock = styled("div")`
  padding: 15px 20px 20px;
  border-bottom: 1px solid ${Palette.gray2};

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;
