import {
  ProfileHeader,
  HeaderBackground,
  InfoWrapper,
  Buttons,
  Tabs,
  Tab,
} from "./style";
import { PageHeader } from "@/styles/typography";
import { Name, HardSkills } from "@/styles/typography";
import { Icon } from "@/ui/Icon";
import Avatar from "@/components/general/Avatar";
import { Button } from "@/ui/Button";
import { useState } from "react";
import { Info } from "@/Pages/Profile/components/Info";
import { Portfolio } from "@/Pages/Profile/components/Portfolio";

const tabs = [
  { label: "Личная информация", key: "info" },
  { label: "Портфолио", key: "portfolio" },
];

export const Profile = () => {
  const [activeTab, setActiveTab] = useState("info");

  const user = {
    name: "Сергей Иванов",
    profession: "UX/UI дизайнер",
  };

  const tabClickHandler = (key: string) => {
    setActiveTab(key);
  };

  return (
    <>
      <ProfileHeader>
        <Icon name={"arrow-left-icon"} width={24} height={24} asButton />
        <PageHeader>Профиль фрилансера</PageHeader>
      </ProfileHeader>
      <HeaderBackground>
        <Avatar round name="Сергей Иванов" statusColor="white" size={96} />
      </HeaderBackground>
      <InfoWrapper>
        <Name>{user.name}</Name>
        <HardSkills>{user.profession}</HardSkills>
      </InfoWrapper>
      <Buttons>
        <Button type="primary">Выбрать</Button>
        <Button type="secondary">Написать</Button>
      </Buttons>
      <Tabs>
        {tabs.map(tab => (
          <Tab
            active={activeTab === tab.key}
            onClick={() => tabClickHandler(tab.key)}
            key={tab.key}
          >
            {tab.label}
          </Tab>
        ))}
      </Tabs>
      {activeTab === "info" ? <Info /> : <Portfolio />}
    </>
  );
};
