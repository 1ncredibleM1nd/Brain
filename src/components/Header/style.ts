import { styled } from "goober";
import { Palette } from "@/styles/constants";

export const Wrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 28px 87px 24px 61px;
`;

export const ActionsWrapper = styled("div")`
  width: 30%;
  display: flex;
  align-items: center;
`;

export const NotificationWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Palette.white1};
  border: 1px solid ${Palette.violet};
  cursor: pointer;
  border-radius: 10px;
  padding: 13px;
`;
