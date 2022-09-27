import React, { Children } from "react";
import { observer } from "mobx-react-lite";
import { ModalBodyWrapper } from "@/ui/Modal/ModalBody/style";
import { ModalBlock } from "@/ui/Modal/style";

type TProps = {
  className?: string;
  children?: React.ReactNode;
};

export const ModalBody = observer(({ className, children }: TProps) => (
  <ModalBodyWrapper className={className}>
    {Children.map(children, child => (
      <ModalBlock>{child}</ModalBlock>
    ))}
  </ModalBodyWrapper>
));
