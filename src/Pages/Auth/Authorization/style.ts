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
  margin-bottom: 45px;

  & :first-child {
    margin-bottom: 16px;
  }
`;

export const AgreementSpan = styled("span")`
  display: block;
  width: 100%;
  padding-top: 16px;
  line-height: 18px;
  border-top: 1px solid ${Palette.gray2};
  font-size: 12px;

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${Palette.violet};
  }
`;

export const DataWrapper = styled("div")`
  width: 435px;
  height: 630px;
  margin-left: 15%;
  padding: 32px;
  background: ${Palette.white1};
  box-shadow: 0 10px 60px rgba(226, 236, 249, 0.5);
  border-radius: 40px;
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

export const ImgWrapper = styled("div")`
  background-image: url("./auth.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: auto;
  width: 40%;
  height: 100%;
`;
