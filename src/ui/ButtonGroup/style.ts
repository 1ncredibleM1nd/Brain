import { styled } from "goober";
import { Palette } from "@/styles/constants";

export const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const Item = styled("button")<{ active: number }>`
  font-size: 12px;
  padding: 8px 12px;
  color: ${Palette.gray8};
  background: ${Palette.white};
  border: 1px solid ${Palette.gray2};
  outline: none !important;
  cursor: pointer;

  &:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding-left: 17px;
  }

  &:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding-right: 17px;
  }

  @media (max-width: 600px) {
    margin-right: 0 !important;
  }

  ${({ active }) =>
    active &&
    `
      background: #e9eaec;
      color: ${Palette.black};
    `}
`;
