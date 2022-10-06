import { styled } from "goober";
import { Palette } from "@/styles/constants";

export const ProfileHeader = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 26px;

  & :first-child {
    margin-right: 25px;
  }

  & :last-child {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const HeaderBackground = styled("div")`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 24px;
  background-color: blanchedalmond;
  display: flex;
  margin-bottom: 45px;

  > div {
    position: absolute;
    left: 50%;
    top: 95%;
    transform: translate(-50%, -50%);
  }
`;

export const InfoWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Buttons = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;

  & :first-child {
    margin-right: 16px;
  }
`;

export const Tabs = styled("div")`
  display: flex;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 32px;
`;

export const Tab = styled("span")<{ active?: boolean }>`
  position: relative;
  display: block;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  margin-right: 40px;

  ${({ active }) =>
    active &&
    `
      &::after {
    position: absolute;
    content: "";
    width: 100%;
    left: 0;
    top: calc(100% + 2px);
    height: 4px;
    background: ${Palette.violet};
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
    `}
`;
