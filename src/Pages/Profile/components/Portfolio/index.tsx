import { Wrapper, CardImage, CardWrapper } from "./style";
import { ProjectTitle } from "@/styles/typography";
import { Button } from "@/ui/Button";

export const Portfolio = () => {
  const projects = [
    "Баннер рекламный",
    "UX/UI дизайн приложения",
    "Диззайн всего подряд",
    "Диззайн всего подряд",
    "Диззайн всего подряд",
  ];
  return (
    <>
      <Wrapper>
        {projects.map(project => (
          <CardWrapper>
            <CardImage />
            <ProjectTitle>{project}</ProjectTitle>
            <Button type="primary" fit="cover">
              Посмотреть проект
            </Button>
          </CardWrapper>
        ))}
      </Wrapper>
    </>
  );
};
