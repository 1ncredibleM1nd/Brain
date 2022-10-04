import { styled } from "goober";
import { Palette } from "@/styles/constants";

export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 313px;
  max-height: 400px;
  margin-top: 14px;
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

  & :first-child {
    margin-right: 6px;
  }
`;

export const ParamWrapper = styled("div")`
  max-width: 120px;
  height: 45px;
  display: flex;
  align-items: center;
  padding: 13px;
  border-radius: 10px;
  background: ${Palette.gray3};
`;

export const Name = styled("span")`
  display: block;
  margin-top: 14px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${Palette.black};
  font-size: 18px;
`;

export const HardSkills = styled("span")`
  display: block;
  max-width: 182px;
  margin-bottom: 14px;
  color: ${Palette.gray};
`;

export const Actions = styled("div")`
  display: flex;
  align-items: center;
  margin-top: auto;

  & :first-child {
    margin-right: 6px;
  }
`;

export const Info = styled("span")<{ color: string }>`
  word-wrap: break-word;
  font-weight: 500;

  ${({ color }) =>
    color &&
    `
      color: ${color};
    `}
`;
