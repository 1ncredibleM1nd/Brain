import React from "react";
import { observer } from "mobx-react-lite";
import { ModalFooterWrapper } from "@/ui/Modal/ModalFooter/style";

type TProps = {
  children?: React.ReactNode;
  className?: string;
};

export const ModalFooter = observer(({ children, className }: TProps) => {
  return (
    <ModalFooterWrapper className={className}>{children}</ModalFooterWrapper>
  );
});
