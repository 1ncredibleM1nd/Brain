import { styled } from "goober";
import { Palette } from "@/styles/constants";

export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 28px;
  max-width: 300px;
  height: 100%;
  background: ${Palette.white1};
`;

export const LinksWrapper = styled("div")`
  margin-top: 80px;
  display: flex;
  flex-direction: column;

  & a {
    text-decoration: none;
  }
`;
