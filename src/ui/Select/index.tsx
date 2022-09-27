import { observer } from "mobx-react-lite";
import {
  StyledReactSelect,
  StyledOption,
  StyledMultiValueLabel,
  StyledMultiValueRemove,
} from "@/ui/Select/style";
import { Wrapper } from "@/ui/Select/style";
import {
  Props as ReactSelectProps,
  OptionProps as ReactOptionProps,
  MultiValueGenericProps as ReactMultiValueGenericProps,
  MultiValueRemoveProps as ReactMultiValueRemoveProps,
} from "react-select";

type TProps = {
  shadow?: boolean;
  likeDropdown?: boolean;
} & ReactSelectProps<any>;
type TPropsOption = ReactOptionProps<any>;
type TPropsMultiValueGeneric = ReactMultiValueGenericProps<any>;
type TPropsMultiValueRemoveProps = ReactMultiValueRemoveProps<any>;

const menuConfig = {
  menuPortal: (provided: any) => ({ ...provided, zIndex: 9999 }),
  menu: (provided: any) => ({ ...provided, zIndex: 9999 }),
};

export const Select = observer(
  ({ likeDropdown = false, shadow = false, ...props }: TProps) => {
    return (
      <Wrapper shadow={shadow} isDropdown={likeDropdown}>
        <StyledReactSelect
          menuPortalTarget={document.body}
          menuPosition="fixed"
          styles={menuConfig}
          classNamePrefix={"Select"}
          {...props}
        />
      </Wrapper>
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
