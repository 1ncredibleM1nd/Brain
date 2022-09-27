import { ReactNode, useRef } from "react";
import { observer } from "mobx-react-lite";
import { ModalBackground, ModalOverlay, ModalWrapper } from "@/ui/Modal/style";
import { createPortal } from "react-dom";
import { useKeyPress } from "@/components/hooks/useKeyPress";

type TModalSize = "sm" | "md" | "lg";

type TProps = {
  children: ReactNode;
  visible?: boolean;
  fitContent?: boolean;
  size?: TModalSize;
  onClose: () => void;
  parentSelector?: HTMLElement | null;
  className?: string;
};

export const Modal = observer(
  ({
    visible,
    fitContent = false,
    size = "sm",
    onClose,
    children,
    parentSelector,
    className,
  }: TProps) => {
    const modalRef = useRef(null);

    useKeyPress("Escape", () => {
      if (visible) {
        onClose();
      }
    });

    return createPortal(
      visible ? (
        <ModalOverlay fitContent={fitContent}>
          <ModalBackground onClick={onClose} />
          <ModalWrapper ref={modalRef} size={size}>
            {children}
          </ModalWrapper>
        </ModalOverlay>
      ) : null,
      parentSelector ?? document.body,
    );
  },
);
