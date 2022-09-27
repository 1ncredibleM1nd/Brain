import React from "react";
import { Wrapper, Name } from "./style";
import { Icon } from "@/ui/Icon";

export const Tab = ({ link }: any) => {
  const { name, identifier } = link;
  return (
    <Wrapper>
      <Icon name={`${identifier}-icon`} width={22} height={22} />
      <Name>{name}</Name>
      <Icon name="arrow-icon" width={12} height={12} />
    </Wrapper>
  );
};
