import { observer } from "mobx-react-lite";
import {
  StyledReactSelect,
  StyledOption,
  StyledMultiValueLabel,
  StyledMultiValueRemove,
} from "@/ui/Select/style";
import { Wrapper, Label } from "@/ui/Select/style";
import {
  Props as ReactSelectProps,
  OptionProps as ReactOptionProps,
  MultiValueGenericProps as ReactMultiValueGenericProps,
  MultiValueRemoveProps as ReactMultiValueRemoveProps,
} from "react-select";

type TProps = {
  shadow?: boolean;
  likeDropdown?: boolean;
  label?: string;
} & ReactSelectProps<any>;
type TPropsOption = ReactOptionProps<any>;
type TPropsMultiValueGeneric = ReactMultiValueGenericProps<any>;
type TPropsMultiValueRemoveProps = ReactMultiValueRemoveProps<any>;

const menuConfig = {
  menuPortal: (provided: any) => ({ ...provided, zIndex: 9999 }),
  menu: (provided: any) => ({ ...provided, zIndex: 9999 }),
};

export const Select = observer(
  ({ likeDropdown = false, shadow = false, label, ...props }: TProps) => {
    return (
      <>
        <Label>{label}</Label>
        <Wrapper shadow={shadow} isDropdown={likeDropdown}>
          <StyledReactSelect
            menuPortalTarget={document.body}
            placeholder={"Не выбрано"}
            noOptionsMessage={() => <p>Нет опций</p>}
            menuPosition="fixed"
            styles={menuConfig}
            classNamePrefix={"Select"}
            {...props}
          />
        </Wrapper>
      </>
    );
  },
);

export const Option = observer((props: TPropsOption) => {
  return <StyledOption {...props} />;
});

export const MultiValueLabel = observer((props: TPropsMultiValueGeneric) => {
  return <StyledMultiValueLabel {...props} />;
});

export const MultiValueRemove = observer(
  (props: TPropsMultiValueRemoveProps) => {
    return <StyledMultiValueRemove {...props} />;
  },
);
