import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import { CheckBoxWrapper, Input, SvgWrapper, StyledIcon, Text } from "./style";

type TProps = {
  value?: boolean;
  label?: string;
  children?: ReactNode;
  onChange?: (value: boolean) => void;
};

export const CheckBox = observer(
  ({ value = false, label, children, onChange }: TProps) => {
    return (
      <CheckBoxWrapper onChange={() => onChange?.(!value)}>
        <Input type="checkbox" defaultChecked={value} />
        <SvgWrapper active={value} onlyIcon={!(label || children)}>
          {value && <StyledIcon name="check-icon" width={12} height={10} />}
        </SvgWrapper>
        <Text>{label || children}</Text>
      </CheckBoxWrapper>
    );
  },
);
