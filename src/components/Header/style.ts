import { styled } from "goober";
import { Palette } from "@/styles/constants";
import Avatar from "@/components/Header/User/Avatar";

export const Wrapper = styled("div")`
  width: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 28px;
  padding-bottom: 24px;
  margin-right: 87px;
  margin-left: 61px;
  border-bottom: 1px solid ${Palette.gray2};
`;

export const ActionsWrapper = styled("div")`
  width: auto;
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

export const StyledAvatar = styled(Avatar)<{
  hasAvatar: boolean;
  round: boolean;
}>`
  margin-right: 6px;
  border-radius: 50%;

  ${round => round && `border-radius: 50%`}
  span > span {
    display: none;
  }

  ${hasAvatar =>
    hasAvatar &&
    `
   span > span {
      display: block;
    }`}
`;
