import React, { ReactNode } from "react";
import { observer } from "mobx-react-lite";
import { ModalHeaderWrapper } from "@/ui/Modal/ModalHeader/style";
import { Palette } from "@/styles/constants";
import {
  ModalExtraContainer,
  ModalCloseButton,
  ModalTitle,
  Wrapper,
} from "@/ui/Modal/ModalHeader/style";

type TProps = {
  children?: ReactNode;
  extra?: ReactNode;
  onClose: () => void;
  title: string;
};

export const ModalHeader = observer(
  ({ title, children, extra, onClose }: TProps) => {
    return (
      <Wrapper>
        <ModalHeaderWrapper>
          <ModalTitle>{title}</ModalTitle>
          {extra && <ModalExtraContainer>{extra}</ModalExtraContainer>}

          <ModalCloseButton
            onClick={() => onClose()}
            name={"close-icon"}
            fill={Palette.gray4}
            size={"sm"}
          />
        </ModalHeaderWrapper>
        {children}
      </Wrapper>
    );
  },
);
