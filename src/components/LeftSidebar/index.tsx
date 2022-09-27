import React from "react";
import { Wrapper, LinksWrapper } from "./style";
import { Icon } from "@/ui/Icon";
import { Link } from "react-router-dom";
import { Tab } from "@/components/LeftSidebar/Tab";

const Links = [
  {
    identifier: "projects",
    name: "Проекты",
  },
  {
    identifier: "messages",
    name: "Сообщения",
  },
  {
    identifier: "freelancers",
    name: "Фрилансеры",
  },
  {
    identifier: "notifications",
    name: "Уведомления",
  },
  {
    identifier: "documents",
    name: "Документы",
  },
  {
    identifier: "user",
    name: "Личные данные",
  },
  {
    identifier: "finances",
    name: "Финансы",
  },
  {
    identifier: "settings",
    name: "Настройки",
  },
  {
    identifier: "help",
    name: "Помощь",
  },
];

export const LeftSidebar = () => {
  return (
    <Wrapper>
      <Icon name={"logo"} width={145} height={40} />
      <LinksWrapper>
        {Links.map(link => (
          <Link to={`/${link.identifier}`}>
            <Tab link={link} />
          </Link>
        ))}
      </LinksWrapper>
    </Wrapper>
  );
};
