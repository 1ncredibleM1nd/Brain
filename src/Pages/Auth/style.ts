import { styled } from "goober";
import { Palette } from "@/styles/constants";

export const Wrapper = styled("div")`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
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

export const ImgWrapper = styled("div")`
  background-image: url("./auth.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: auto;
  width: 40%;
  height: 100%;
`;
