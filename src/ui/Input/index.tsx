import { FC, InputHTMLAttributes, ReactNode } from "react";
import { Wrapper, StyledLabel, StyledInput, Description } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string | ReactNode;
  description?: string;
}

export const Input: FC<InputProps> = ({
  name,
  label,
  description,
  ...props
}) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput {...props} id={name} />
      <Description>{description}</Description>
    </Wrapper>
  );
};
