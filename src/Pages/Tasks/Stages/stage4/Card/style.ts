import { styled } from "goober";
import { Palette } from "@/styles/constants";

export const Wrapper = styled("div")`
  max-width: 313px;
  padding: 26px;
  box-shadow: 0 10px 60px rgba(226, 236, 249, 0.5);
  border-radius: 20px;
`;

export const AvatarWrapper = styled("div")`
  width: 260px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;
  background: aquamarine;
  border-radius: 24px;
`;

export const Params = styled("div")`
  display: flex;
  align-items: center;
`;

export const ParamWrapper = styled("div")`
  max-width: 100px;
  height: 45px;
  display: flex;
  align-items: center;
  padding: 13px;
  border-radius: 10px;
  background: ${Palette.gray3};
`;

export const Info = styled("span")<{ color: string }>`
  display: block;
  margin-left: 6px;

  ${({ color }) =>
    color &&
    `
      color: ${color};
    `}
`;
