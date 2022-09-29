import React, {
  useImperativeHandle,
  useRef,
  TextareaHTMLAttributes,
} from "react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useState } from "react";
import {
  Wrapper,
  StyledTextArea,
  ScrollWrapper,
} from "@/ui/TextArea/TextArea.style";

type TProps = {
  placeholder?: string;
  onChange?: (value: string) => void;
  rows?: number;
  value?: string;
  className?: string;
  hasError?: boolean;
};

export const TextArea = observer(
  (
    { placeholder, value, rows, onChange, className, hasError }: TProps,
    ref,
  ) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [text, setText] = useState("");

    const [textAreaHeight, setTextAreaHeight] = useState("auto");

    useImperativeHandle(ref, () => ({
      focus: () => textAreaRef.current!.focus(),
      cursorPosition: () => [
        textAreaRef.current?.selectionStart,
        textAreaRef.current?.selectionEnd,
      ],
      select: () => {
        setTextAreaHeight(`${textAreaRef.current?.scrollHeight}px`);
        textAreaRef.current?.focus();
      },
    }));

    useEffect(() => {
      if (textAreaRef.current) {
        setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`);
      }
    }, [textAreaRef, text]);

    const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
      setTextAreaHeight("auto");
      onChange?.(event.target.value);
    };

    return (
      <ScrollWrapper className={className}>
        <Wrapper className={hasError ? "hasError" : ""}>
          <StyledTextArea
            ref={textAreaRef}
            value={value}
            placeholder={placeholder}
            rows={rows ?? 1}
            style={{ height: textAreaHeight }}
            onChange={onChangeHandler}
          />
        </Wrapper>
      </ScrollWrapper>
    );
  },
  {
    forwardRef: true,
  },
);
