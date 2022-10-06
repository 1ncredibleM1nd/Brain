import { styled } from "goober";
import { Palette } from "@/styles/constants";

export const CheckboxWrapper = styled("div")`
  display: flex;
  margin-top: 26px;

  & :first-child {
    margin-right: 64px;
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
