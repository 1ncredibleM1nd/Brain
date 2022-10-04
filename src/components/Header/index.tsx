import React from "react";
import { useHistory } from "react-router-dom";
import { Icon } from "@/ui/Icon";
import { Wrapper, ActionsWrapper, NotificationWrapper, Counter } from "./style";
import { Button } from "@/ui/Button";
import { User } from "./User/index";

export const Header = () => {
  let history = useHistory();

  const redirect = () => {
    history.push("/tasks");
  };
  return (
    <Wrapper>
      <Button type="secondary" size="sm" onClick={() => redirect()}>
        Создать проект
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
