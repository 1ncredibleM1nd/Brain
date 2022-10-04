import { FC, InputHTMLAttributes, ReactNode } from "react";
import { Wrapper, StyledLabel, StyledInput } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string | ReactNode;
}

export const Input: FC<InputProps> = ({ name, label, ...props }) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput {...props} id={name} />
    </Wrapper>
  );
};
