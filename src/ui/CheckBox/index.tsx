import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import { CheckBoxWrapper, Input, SvgWrapper, StyledIcon, Text } from "./style";

type TProps = {
  value?: boolean | string;
  label?: string;
  radio?: boolean;
  children?: ReactNode;
  onChange?: (value: boolean) => void;
};

export const Checkbox = observer(
  ({ value = false, label, children, onChange, radio }: TProps) => {
    return (
      <CheckBoxWrapper onChange={() => onChange?.(!value)}>
        <Input type="checkbox" defaultChecked={value} />
        <SvgWrapper
          radio={radio}
          active={value}
          onlyIcon={!(label || children)}
        >
          {value && (
            <StyledIcon
              name={radio ? "active-radio-icon" : "check-icon"}
              width={radio ? 12 : 10}
              height={radio ? 12 : 10}
            />
          )}
        </SvgWrapper>
        <Text>{label || children}</Text>
      </CheckBoxWrapper>
    );
  },
);
