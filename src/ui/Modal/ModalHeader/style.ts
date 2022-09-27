import { styled } from "goober";
import { Icon } from "@/ui/Icon";
import { Palette } from "@/styles/constants";

export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const ModalExtraContainer = styled("div")`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 30px;

  @media (max-width: 320px) {
    margin-right: 18px;
  }
`;

export const ModalCloseButton = styled(Icon)`
  padding: 2px;
  cursor: pointer;
`;

export const ModalHeaderWrapper = styled("div")`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${Palette.gray2};
`;

export const ModalTitle = styled("span")`
  font-size: 16px;
  color: #000;
`;
