import { styled } from "goober";
import { Palette } from "@/styles/constants";
import { stageType } from "@/Pages/Auth";

export const PageHeader = styled("h2")<{ stage?: stageType }>`
  font-size: 22px;
  font-weight: bold;
  color: ${Palette.black};

  ${({ stage }) => {
    return `margin-bottom: ${stage ? "16px" : "32px"};`;
  }}
`;

export const BlockHeader = styled("h3")`
  margin-top: 32px;
  margin-bottom: 26px;
  font-size: 14px;
  font-weight: 500;
  color: ${Palette.violet};
  line-height: 20px;
`;

export const BlockDescription = styled("p")`
  margin: 8px 0 20px;
  padding: 0;
  color: ${Palette.gray};
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.015em;
  max-width: 395px;

  a {
    color: ${Palette.violet};
    cursor: pointer;
  }
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

export const TextAbout = styled("span")`
  display: block;
  max-width: 645px;
  font-size: 14px;
  margin-bottom: 26px;
  letter-spacing: 0.005em;
  line-height: 20px;
  color: ${Palette.black2};
`;

export const ProjectTitle = styled("span")`
  display: block;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${Palette.black};
`;
