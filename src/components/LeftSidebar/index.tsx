import React from "react";
import { Wrapper, LinksWrapper, ExitWrapper } from "./style";
import { Icon } from "@/ui/Icon";
import { Link } from "react-router-dom";
import { Tab } from "@/components/LeftSidebar/Tab";

type TLink = {
  identifier: string;
  name: string;
};

type TProps = {
  links: TLink[];
};

export const LeftSidebar = ({ links }: TProps) => {
  return (
    <Wrapper>
      <Icon name={"logo"} width={145} height={40} />
      <LinksWrapper>
        {links.map(link => (
          <Link to={`/${link.identifier}`}>
            <Tab link={link} />
          </Link>
        ))}
      </LinksWrapper>
      <ExitWrapper>
        <Link to={`/exit`}>
          <Tab link={{ name: "Выйти", identifier: "exit" }} />
        </Link>
      </ExitWrapper>
    </Wrapper>
  );
};
