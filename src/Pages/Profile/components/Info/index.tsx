import { Name, TextAbout } from "@/styles/typography";
import { WorkTag, WorkTags } from "./style";

const works = ["UX/UI", "Баннеры", "Дизайн", "Архитектура WEB"];

export const Info = () => {
  return (
    <>
      <Name>Обо мне</Name>
      <TextAbout>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
        scelerisque mauris lacus ullamcorper fermentum vitae convallis diam
        semper. Et velit malesuada eu ipsum felis sodales. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit.{" "}
      </TextAbout>
      <Name>Опыт работы</Name>
      <TextAbout>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
        scelerisque mauris lacus ullamcorper fermentum vitae convallis diam
        semper. Et velit malesuada eu ipsum felis sodales. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit.{" "}
      </TextAbout>
      <Name>Языки</Name>
      <TextAbout>English (B2)</TextAbout>
      <Name>Типы работ</Name>
      <WorkTags>
        {works.map(work => (
          <WorkTag>{work}</WorkTag>
        ))}
      </WorkTags>
    </>
  );
};
