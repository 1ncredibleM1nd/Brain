import { styled } from "goober";
import { Palette } from "@/styles/constants";

export const Wrapper = styled("div")`
  padding: 40px;
  margin-top: 40px;
  margin-left: 60px;
  overflow-y: scroll;
  height: 780px;
  margin-right: 86px;
  background: ${Palette.white1};
  box-shadow: 0 10px 60px rgba(226, 236, 249, 0.5);
`;
