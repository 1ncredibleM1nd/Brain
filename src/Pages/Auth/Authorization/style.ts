import { styled } from "goober";
import { Palette } from "@/styles/constants";

export const Wrapper = styled("div")`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Buttons = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 45px;
  margin-bottom: 10px;

  & :first-child {
    margin-bottom: 16px;
  }
`;

export const PasswordLink = styled("a")`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-top: 8px;
  text-align: right;
  color: ${Palette.violet};
  text-decoration: none;
`;
