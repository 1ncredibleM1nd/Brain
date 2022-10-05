import { Wrapper, RadioButtonLabel, RadioButton } from "./style";

type TProps = {
  id?: string;
  label?: string;
  value?: string;
};

export const Radio = ({ label, value }: TProps) => {
  return (
    <Wrapper>
      <RadioButton type="radio" name="radio" value={value} checked={true} />
      <RadioButtonLabel />
      <div>{label}</div>
    </Wrapper>
  );
};
