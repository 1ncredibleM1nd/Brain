import React from "react";
import { Wrapper, InfoWrapper, Name, Mail } from "./style";
import { StyledAvatar } from "@/components/Header/style";
import { Icon } from "@/ui/Icon";

export const User = () => {
  return (
    <Wrapper>
      <StyledAvatar hasAvatar={true} size={40} round name="Valentina" />
      <InfoWrapper>
        <Name>Валентина</Name>
        <Mail>valentinarevina@gmail.com</Mail>
      </InfoWrapper>
      <Icon
        style={{ marginLeft: 20, cursor: "pointer" }}
        name="arrow-down-icon"
        width={12}
        height={6}
      />
    </Wrapper>
  );
};
