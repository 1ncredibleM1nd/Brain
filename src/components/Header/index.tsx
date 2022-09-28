import React from "react";
import { Icon } from "@/ui/Icon";
import { Wrapper, ActionsWrapper, NotificationWrapper, Counter } from "./style";
import { Button } from "@/ui/Button";
import { User } from "./User/index";

export const Header = () => {
  return (
    <Wrapper>
      <Button type="secondary" size="sm" onClick={() => console.log("kek")}>
        Создать задачу
      </Button>
      <ActionsWrapper>
        <NotificationWrapper>
          <Icon name="notifications-icon" size={"lg"} />
          <Counter>2</Counter>
        </NotificationWrapper>
        <User />
      </ActionsWrapper>
    </Wrapper>
  );
};
