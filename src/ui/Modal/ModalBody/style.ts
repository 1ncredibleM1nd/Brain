import { styled } from "goober";
import { ModalBlock } from "@/ui/Modal/style";
import { Palette } from "@/styles/constants";

export const ModalBodyWrapper = styled("div")`
  overflow: auto;
  max-height: calc(100% - 62px);

  @media (max-width: 480px) {
    height: 100%;
  }

  ${ModalBlock}:last-child {
    padding: 0;
    border: none;
  }
`;

export const ModalBodyBlockTitle = styled("h6")`
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;
  color: ${Palette.gray8};

  &:first-child {
    margin-top: 0;
  }
`;
