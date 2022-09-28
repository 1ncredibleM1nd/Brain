import React from "react";
import { Icon } from "@/ui/Icon";
import { Wrapper, ActionsWrapper, NotificationWrapper } from "./style";
import { Button } from "@/ui/Button";

export const Header = () => {
  return (
    <Wrapper>
      <Button type="secondary" size="sm" onClick={() => console.log("kek")}>
        Создать задачу
      </Button>
      <ActionsWrapper>
        <NotificationWrapper>
          <Icon name="notifications-icon" size={"lg"} />
        </NotificationWrapper>
      </ActionsWrapper>
    </Wrapper>
  );
};
