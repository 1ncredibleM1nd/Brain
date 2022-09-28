import { styled } from "goober";
import { Palette } from "@/styles/constants";

export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 28px;
  max-width: 300px;
  height: 100vh;
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

export const ExitWrapper = styled("div")`
  margin-top: 220px;

  & > a {
    text-decoration: none;
  }
`;
