import { styled } from "goober";
import { Palette } from "@/styles/constants";

export const Wrapper = styled("div")<{ active?: number }>`
  display: flex;
  align-items: center;
  max-width: 242px;
  width: 242px;
  padding: 14px 18px 14px 14px;

  & :last-child {
    margin-left: auto;
  }

  ${({ active }) =>
    active &&
    `
      background: ${Palette.violet};
      color: ${Palette.white1};
    `}
`;

export const Name = styled("span")`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: ${Palette.gray};
  margin-left: 12px;
`;
