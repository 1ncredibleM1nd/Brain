import { FC, InputHTMLAttributes, ReactNode } from "react";
import { Wrapper, StyledLabel, StyledInput } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string | ReactNode;
  required?: boolean;
}

export const Input: FC<InputProps> = ({ name, label, required, ...props }) => {
  return (
    <Wrapper>
      <StyledLabel required={required} htmlFor={name}>
        {label}
      </StyledLabel>
      <StyledInput {...props} id={name} />
    </Wrapper>
  );
};
