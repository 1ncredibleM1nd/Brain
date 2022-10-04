import {
  Wrapper,
  ProgressWrapper,
  ProgressLine,
  LabelValue,
  LabelText,
} from "./style";

type TProps = {
  id: string;
  value: string;
};

export const ProgressBar = ({ id, value }: TProps) => {
  return (
    <Wrapper>
      <label htmlFor={id}>
        <LabelValue>{value}%</LabelValue>
        <LabelText>Заполнено</LabelText>
      </label>
      <ProgressWrapper>
        <ProgressLine value={value} />
      </ProgressWrapper>
    </Wrapper>
  );
};
